const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;  // salt를 만들때 10자리 salt를 만든다.
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true,     // trim은 빈칸을 없애주는 역할
    unique: 1
  },
  password: {
    type: String,
    minlength: 5
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  role: {
    type: Number,
    default: 0
  },
  image: String,
  token: {
    type: String
  },
  tokenExp: {
    type: Number
  }
})

// 스키마가 저장되기 전에 함수 실행
userSchema.pre('save', function( next ) {
  var user = this
  // 비밀번호 수정 시에만 암호화 실행
  if(user.isModified('password')) {
    // 비밀번호를 암호화 시킨다.
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err)
      
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err)
        user.password = hash    // 해시된 비밀번호로 유저 비밀번호 변경
        next()
      })
    })
  } else {
    next()
  }

})

userSchema.methods.comparePassword = function(plainPassword, cb) {
  // plainPassword 1234567    vs    암호화된 비밀번호(해시값)
  bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
    if(err) return cb(err),
    cb(null, isMatch)
  })
}

userSchema.methods.generateToken = function(cb) {
  var user = this;
  // jsonwebtoken을 이용해서 token을 생성하기
  var token = jwt.sign(user._id.toHexString(), 'secretToken')
  
  user.token = token
  user.save(function(err, user) {
    if(err) return cb(err)
    cb(null, user)
  })
}


const User = mongoose.model('User', userSchema)

module.exports = { User }
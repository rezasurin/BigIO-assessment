const jwt = require("jsonwebtoken")
const config = require("../config/auth.config")
const db = require("../models")
const User = db.user
const Role = db.role

const verifyToken = (req, res, next) => {
  let token = req.headers.access_token

  if (!token) {
    return res.status(403).send({message: "no token provided!"})
  }

  jwt.verify(token, config.secretKey, (err, decoded) => {
    if (err){
      res.status(401).send({message: "Unauthorized"})
    }
    req.userId = decoded.id
    next()
  })
}

const isAdmin = (req, res, next) => {
  User.findById(req.userId).exec((err, res) => {
    if (err) {
      res.status(500).send({message: err})
    }
    Role.find({
      _id: {$in: user.roles}
    }, (err, roles) => {
      if (err) {
        res.status(500).send({message: err})
      }

      for (let index in roles) {
        if (roles[index].name === "admin") {
          next()
          return
        }
      }
      res.status(403).send({message: "Require admin role"})
      return
    })
  })
}

const isTeacher = (req, res, next) => {
  User.findById(req.userId).exec((err, res) => {
    if (err) {
      res.status(500).send({message: err})
    }
    Role.find({
      _id: {$in: user.roles}
    }, (err, roles) => {
      if (err) {
        res.status(500).send({message: err})
      }

      for (let index in roles) {
        if (roles[index].name === "teacher") {
          next()
          return
        }
      }
      res.status(403).send({message: "Require Teacher role"})
      return
    })
  })
}

const authJwt = {
  verifyToken,
  isAdmin,
  isTeacher
}
module.exports = authJwt
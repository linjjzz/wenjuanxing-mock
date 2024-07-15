const router = require('koa-router')()
const Mock = require('mockjs')

const Random = Mock.Random

router.prefix('/api/user')

router.get('/info', (ctx, next) => {
  ctx.body = {
    code: 0,
    data: {
      username: Random.cname(),
      nickname: Random.cname()
    }
  }
})

router.post('/login', (ctx, next) => {
  ctx.body = {
    code: 0,
    data: {
      token: Random.word(20)
    }
  }
})

router.post('/register', (ctx, next) => {
  ctx.body = {
    code: 0,
    data: {
      id: Random.id()
    }
  }
})


module.exports = router


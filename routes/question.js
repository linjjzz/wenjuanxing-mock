const Mock = require('mockjs')
const router = require('koa-router')()

router.prefix('/api/question')

const Random = Mock.Random

router.get('/:id', function (ctx, next) {
  const { id } = ctx.params
  ctx.body = {
    code: 0,
    data: {
      id,
      title: Random.ctitle()
    }
  }
})

router.get('/', function (ctx, next) {
  const { url = '' } = ctx
  const isDeleted = url.indexOf('isDeleted=true') >= 0
  const isStar = url.indexOf('isStar=true') >= 0
  ctx.body = {
    code: 0,
    data: {
      list: getQuestionList({ isDeleted, isStar }),
      total: 100, //总数
    }
  }
})

router.post('/', function (ctx, next) {
  ctx.body = {
    code: 0,
    data: {
      id: Random.id()
    }
  }
})


function getQuestionList(opt) {
  const { len = 10, isDeleted = false, isStar = false } = opt
  const list = []
  for (let i = 0; i < len; i++) {
    list.push({
      id: Random.id(),
      title: Random.ctitle(),
      isPublished: Random.boolean(),
      isStar: isStar ? isStar : Random.boolean(),
      answerCount: Random.natural(50, 100),
      createAt: Random.datetime('yyyy-MM-dd HH:mm'),
      isDeleted,
    })
  }
  return list
}

module.exports = router

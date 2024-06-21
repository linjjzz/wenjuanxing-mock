const router = require('koa-router')()
const Mock = require('mockjs')

router.prefix('/api/question')

const Random = Mock.Random

// 详情
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

// 列表
router.get('/', function (ctx, next) {
  const { url = '', query = {} } = ctx
  const isDeleted = url.indexOf('isDeleted=true') >= 0
  const isStar = url.indexOf('isStar=true') >= 0
  const pageSize = parseInt(query.pageSize) || 10

  ctx.body = {
    code: 0,
    data: {
      list: getQuestionList({ len: pageSize, isDeleted, isStar }),
      total: 100, //总数
    }
  }
})

// 创建
router.post('/', function (ctx, next) {
  ctx.body = {
    code: 0,
    data: {
      id: Random.id()
    }
  }
})

// 修改
router.patch('/:id', function (ctx, next) {
  ctx.body = {
    code: 0,
  }
})

// 批量恢复
router.patch('/', function (ctx, next) {
  ctx.body = {
    code: 0,
  }
})

// 批量删除
router.delete('/', function (ctx, next) {
  ctx.body = {
    code: 0,
  }
})

// 复制
router.post('/duplicate/:id', function (ctx, next) {
  const { id } = ctx.params
  ctx.body = {
    code: 0,
    id
  }
})

function getQuestionList(opt) {
  const { len, isDeleted = false, isStar = false } = opt
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

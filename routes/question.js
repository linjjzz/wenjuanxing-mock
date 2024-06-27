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
      title: Random.ctitle(),
      componentList: [
        {
          fe_id: Random.id(),
          type: 'questionTitle',
          tltle: '标题',
          isHidden: false,
          isLocked: false,
          props: {
            text: '个人信息调研',
            level: 1,
            isCenter: true
          }
        },
        {
          fe_id: Random.id(),
          type: 'questionInput',
          tltle: '输入框',
          isHidden: false,
          isLocked: false,
          props: {
            title: '你的姓名',
            placeholder: '请输入姓名'
          }
        },
        {
          fe_id: Random.id(),
          type: 'questionInput',
          tltle: '电话',
          isHidden: true,
          isLocked: false,
          props: {
            title: '你的电话',
            placeholder: '请输入电话'
          }
        }
      ]
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

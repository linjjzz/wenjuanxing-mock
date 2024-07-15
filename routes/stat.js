const router = require('koa-router')()
const Mock = require('mockjs')
const componentList = require('./utils/getComponentList')

const Random = Mock.Random

router.prefix('/api/stat')

router.get('/:questionId', (ctx, next) => {
  ctx.body = {
    code: 0,
    data: {
      total: 100,
      list: getStatList()
    }
  }
})

router.get('/:questionId/:componentId', (ctx, next) => {
  ctx.body = {
    code: 0,
    data: {
      stat: [
        { name: '选项1', count: 20 },
        { name: '选项2', count: 10 },
        { name: '选项3', count: 25 },
        { name: '选项4', count: 45 },
        { name: '选项5', count: 30 },
      ]
    }
  }
})

module.exports = router

function getStatList(len = 10) {
  const list = []

  for (let i = 0; i < len; i++) {
    const stat = {
      id: Random.id(),
    }

    componentList.forEach(c => {
      const { fe_id, type, props } = c
      switch (type) {
        case 'questionInput':
          stat[fe_id] = Random.ctitle()
          break;
        case 'questionTextArea':
          stat[fe_id] = Random.ctitle()
          break;
        case 'questionRadio':
          stat[fe_id] = props.options[0].text
          break;
        case 'questionCheckbox':
          stat[fe_id] = `${props.list[0].text},${props.list[1].text}`
          break;
        default:
          stat[fe_id] = ''
          break;
      }
    })

    list.push(stat)
  }
  return list
}


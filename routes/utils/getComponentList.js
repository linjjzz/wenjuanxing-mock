const Mock = require('mockjs')

const Random = Mock.Random

module.exports = [
  {
    fe_id: 'c1',
    type: 'questionTitle',
    title: '个人信息调研',
    isHidden: false,
    isLocked: false,
    props: {
      title: '个人信息调研',
      level: 1,
      isCenter: true
    }
  },
  {
    fe_id: 'c2',
    type: 'questionParagraph',
    title: '段落',
    isHidden: false,
    isLocked: false,
    props: {
      text: '段落',
      isCenter: true
    }
  },
  {
    fe_id: 'c3',
    type: 'questionInfo',
    title: '标题段落',
    isHidden: false,
    isLocked: false,
    props: {
      title: '一行标题',
      text: '一行段落'
    }
  },
  {
    fe_id: 'c4',
    type: 'questionInput',
    title: '输入框',
    isHidden: false,
    isLocked: false,
    props: {
      title: '输入框标题',
      placeholder: '请输入'
    }
  },
  {
    fe_id: 'c5',
    type: 'questionInput',
    title: '输入框',
    isHidden: true,
    isLocked: false,
    props: {
      title: '你的电话',
      placeholder: '请输入电话'
    }
  },
  {
    fe_id: 'c6',
    type: 'questionTextArea',
    title: '多行输入框',
    isHidden: false,
    isLocked: false,
    props: {
      title: '多行输入框标题',
      placeholder: '请输入文本'
    }
  },
  {
    fe_id: 'c7',
    type: 'questionRadio',
    title: '单选框',
    isHidden: false,
    isLocked: false,
    props: {
      title: '单选标题',
      options: [
        { value: 'item1', text: '选项1' },
        { value: 'item2', text: '选项2' },
        { value: 'item3', text: '选项3' },
      ],
      value: '',
      isVertical: false,
    }
  },
  {
    fe_id: 'c8',
    type: 'questionCheckbox',
    title: '多选框',
    isHidden: false,
    isLocked: false,
    props: {
      title: '多选标题',
      list: [
        { value: 'item1', text: '选项1', checked: false },
        { value: 'item2', text: '选项2', checked: false },
        { value: 'item3', text: '选项3', checked: false },
      ],
      isVertical: false,
    }
  }
]
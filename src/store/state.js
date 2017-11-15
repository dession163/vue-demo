
// 存放组件之间共享的数据,不能直接修改，需要用mutations显性修改
const state = {
  count:0,
  user: {},
  headline: {},
  isLoading: false,
  moreArticle: true,
  loadMore: false,
  isSaving: false,
  noMore: false,
  dialog: {
    show: false,
    hasTwoBtn: false,
    info: 'hey',
    resolveFn: () => {},
    rejectFn: () => {}
  },
  tags: [],
  curTag: '',
  article: {},
  articles: [],
  draft: {},
  drafts: {},
  comments: [],
  items: [
    { title: "烧脑巨作 《胡莱三国2》TV版大屏开战!", url: "http://www.17sysj.com/news/17484.html",time:"11-13"},
    { title: "暗黑血统2 客服娘光棍节送福利 神秘礼盒竟是！", url: "http://www.17sysj.com/news/17483.html",time:"11-12"},
    { title: "玩得爽!《超神名将传》战斗技巧全攻略",url:"http://www.17sysj.com/news/17482.htm",time:"11-11"},
    { title: "赤炎vs毁灭者 《弹弹堂手游》英雄级武器解析",url:"http://www.17sysj.com/news/17481.htm",time:"11-10"},
    { title: "烧脑巨作 《胡莱三国2》TV版大屏开战!", url: "http://www.17sysj.com/news/17484.html",time:"11-13"},
    { title: "暗黑血统2 客服娘光棍节送福利 神秘礼盒竟是！", url: "http://www.17sysj.com/news/17483.html",time:"11-12"},
    { title: "玩得爽!《超神名将传》战斗技巧全攻略",url:"http://www.17sysj.com/news/17482.htm",time:"11-11"},
    { title: "赤炎vs毁灭者 《弹弹堂手游》英雄级武器解析",url:"http://www.17sysj.com/news/17481.htm",time:"11-10"},
    { title: "烧脑巨作 《胡莱三国2》TV版大屏开战!", url: "http://www.17sysj.com/news/17484.html",time:"11-13"},
  ]
}
export default state;

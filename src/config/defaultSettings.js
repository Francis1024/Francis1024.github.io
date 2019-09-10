/**
 * 项目默认配置项
 *
 */
const NODEENV = process.env.NODE_ENV
export default {
  // github登录必须的clientId和clientSecret 如果本地运行不用动,
  // 如果需要部署到github pages需要分别替换clientId和client Secret的前一个配置为自己相应的clientId和clientSecret
  clientId: NODEENV === 'production' ? 'cdd0db55c674c67e9241' : 'cdd0db55c674c67e9241',
  clientSecret: NODEENV === 'production' ? 'cdfe03f1d855f7c686abff883656ef8ab92bc406' : 'cdfe03f1d855f7c686abff883656ef8ab92bc406',
  // 仓库所属用户名
  username: 'francis1024',
  // 存放数据仓库地址
  articleRepo: 'BlogComment',
  // 存放文章的标签名
  articleLabel: 'article',
  // 存放文章时的markdown内容标签名
  articleMarkdownLabel: 'article-md',
  userInfoLabel: 'userinfo',
  deleteArticleLabel: 'article-delete',
  deletearticleMarkdownLabel: 'article-md-delete',
  // 菜单导航
  adminMenu: [
    {
      title: 'dashboard',
      key: 'dashboard',
      icon: 'pie-chart',
      children: [
        {
          title: '工作台',
          key: 'workbench',
          icon: 'reconciliation'
        },
        {
          title: '个人信息',
          key: 'personal',
          icon: 'user'
        }
      ]
    },
    {
      title: '文章管理',
      key: 'article',
      icon: 'book',
      children: [
        {
          title: '写文章',
          key: 'writeArticle',
          icon: 'plus-square'
        },
        {
          title: '文章管理',
          key: 'articleUpdate',
          icon: 'file-text'
        }
      ]
    }
  ]
}

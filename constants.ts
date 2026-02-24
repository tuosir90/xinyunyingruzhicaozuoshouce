import { OnboardingStep } from './types';

export const APP_TITLE = "新运营入职操作手册";
export const APP_SUBTITLE = "呈尚策划 · 标准化作业流程指南";
export const APP_DESCRIPTION = "欢迎加入运营团队。本手册旨在协助你快速搭建工作环境，掌握核心工具链。请按顺序完成以下环境配置，这是开展后续工作的基础。";

export const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    id: 1,
    category: "核心中枢部署",
    softwareName: "呈尚策划工具箱",
    description: "运营工作的核心指挥台，集成日常所需的所有功能模块。",
    iconName: 'Box',
    details: [
      "这是你未来工作中最高频使用的软件。",
      "请确保安装最新版本，并完成账号登录测试。"
    ]
  },
  {
    id: 2,
    category: "运营店铺管理系统",
    softwareName: "运营店铺管理系统（飞书升级版）",
    description: "在呈尚策划工具箱内直接打开即可进入系统。",
    iconName: 'MessageSquare',
    details: [
      "在呈尚策划工具箱中打开“运营店铺管理系统（飞书升级版）”。",
      "直接打开即可进入系统。",
      "登录密码：csch903。"
    ]
  },
  {
    id: 3,
    category: "多平台管理终端",
    softwareName: "外星人 (Alien)",
    description: "实现美团、淘宝及闪购店铺的高效集中管理。",
    iconName: 'Rocket',
    details: [
      "用于绑定和管理多平台店铺。",
      "请向主管获取初始配置参数。",
      "登录账号：15071766312 密码：94312smo"
    ]
  },
  {
    id: 4,
    category: "数据抓取套件",
    softwareName: "Fiddler + 六选项版工具",
    description: "精准获取竞品及自家店铺的全景数据图。",
    iconName: 'Download',
    details: [
      "安装 Fiddler 用于网络抓包。",
      "安装美团店铺数据处理工具（六选项版）。",
      "两者配合使用，用于下载外卖店铺全店图。"
    ],
    modalButton: {
      label: "Fiddler配置",
      content: `if(oSession.uriContains("https://e.waimai.meituan.com/gw/bizproduct/v3/food/r/")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/response.txt",true);
            oSession.SaveResponseBody("D:/ailun/response.txt");
        }
        if(oSession.uriContains("https://shangoue.meituan.com/reuse/sc/product/retail/r/searchListPage")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/shangou.txt",true);
            oSession.SaveResponseBody("D:/ailun/shangou.txt");
        }
        if(oSession.uriContains("https://www.zhipin.com/wapi/zpgeek/search/joblist.json?")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/boss.txt",true);
            oSession.SaveResponseBody("D:/ailun/boss.txt");
        }
        if(oSession.uriContains("http://zdx.userw.cn/zhiduoxing/zhiduoxing/mendian/mdlist")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/zdx.txt",true);
            oSession.SaveResponseBody("D:/ailun/zdx.txt");
        }
        if(oSession.uriContains("https://waimaieapp.meituan.com/gw/bizdata/flow/single/trend?")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/liuliangshuju.txt",true);
            oSession.SaveResponseBody("D:/ailun/liuliangshuju.txt");
        }
        if(oSession.uriContains("https://wx-shangou.meituan.com/wxapp/v1/poi/")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/shangou.txt",true);
            oSession.SaveResponseBody("D:/ailun/shangou.txt");
        }
        if(oSession.uriContains("https://waimaie.meituan.com/gw/bizproduct/v3/food/r/getSpuListCommon?region_id=1000140200&region_version=1750905424&yodaReady=h5&csecplatform=4&csecversion=2.4.0")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/malatang.txt",true);
            oSession.SaveResponseBody("D:/ailun/malatang.txt");
        }
        if(oSession.uriContains("https://e.waimai.meituan.com/gw/bizproduct/v3/food/r/getSpuListCommon?")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/xiaodingdangshuju.txt",true);
            oSession.SaveResponseBody("D:/ailun/xiaodingdangshuju.txt");
        }
        if(oSession.uriContains("https://waimaie.meituan.com/gw/bizproduct/v3/food/r/getSpuListCommon?")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/liansuoshuju.txt",true);
            oSession.SaveResponseBody("D:/ailun/liansuoshuju.txt");
        }
        if(oSession.uriContains("https://partner.waimai.meituan.com/api/message/list?pageNum=")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/jieyueshuju.txt",true);
            oSession.SaveResponseBody("D:/ailun/jieyueshuju.txt");
        }
        if(oSession.uriContains("https://partner.waimai.meituan.com/api/thirdpartnar/contract/cancel/detail?yodaReady")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/hetongkaishi.txt",true);
            oSession.SaveResponseBody("D:/ailun/hetongkaishi.txt");
        }
        if(oSession.uriContains("https://wx.waimai.meituan.com/weapp/v2/poi/channelpage?")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/shangquanshuju.txt",true);
            oSession.SaveResponseBody("D:/ailun/shangquanshuju.txt");
        }
        if(oSession.uriContains("https://wx.waimai.meituan.com/weapp/shop/v1/poi/productlist?")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/shangpinshuju.txt",true);
            oSession.SaveResponseBody("D:/ailun/shangpinshuju.txt");
        }
        if(oSession.uriContains("https://wx.waimai.meituan.com/weapp/v1/poi/info?")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/dianpuxinxi.txt",true);
            oSession.SaveResponseBody("D:/ailun/dianpuxinxi.txt");
        }
        if(oSession.uriContains("https://app-api.shop.ele.me/nevermore.goods/invoke?method=FoodService2")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/xiaodingdangeleme.txt",true);
            oSession.SaveResponseBody("D:/ailun/xiaodingdangeleme.txt");
        }
        if(oSession.uriContains("https://sff.jddj.com/api?v=1.0&appId=YNE4XWZFDHXOYGKZU5FN&api=dsm.pms.cater.web.cater.queryProductList")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/xiaodingdangjingdong.txt",true);
            oSession.SaveResponseBody("D:/ailun/xiaodingdangjingdong.txt");
        }
        if(oSession.uriContains("https://wx.waimai.meituan.com/weapp/shop/v1/poi/productlist?ui")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/xiaochengxumeituan.txt",true);
            oSession.SaveResponseBody("D:/ailun/xiaochengxumeituan.txt");
        }
        if(oSession.uriContains("https://wx.waimai.meituan.com/weapp/poi/food/render?ui")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/xiaochengxumeituan01.txt",true);
            oSession.SaveResponseBody("D:/ailun/xiaochengxumeituan01.txt");
        }
        if(oSession.uriContains("https://waimai-guide.ele.me/h5/mtop.alsc.waimai.store.miniapp.store.detail.body.query.v2/1.0/2.0/")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/xiaochengxueleme.txt",true);
            oSession.SaveResponseBody("D:/ailun/xiaochengxueleme.txt");
        }
        if(oSession.uriContains("https://search.weixin.qq.com/cgi-bin/wxaweb/wxindex")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/weixinzhishu.txt",true);
            oSession.SaveResponseBody("D:/ailun/weixinzhishu.txt");
        }
        if(oSession.uriContains("https://wx.waimai.meituan.com/weapp/v2/poi/channelpage")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/meituanshangquan.txt",true);
            oSession.SaveResponseBody("D:/ailun/meituanshangquan.txt");
        }
        if(oSession.uriContains("https://www.douyin.com/aweme/v1/web/tab/feed")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/douyin.txt",true);
            oSession.SaveResponseBody("D:/ailun/douyin.txt");
        }
        if(oSession.uriContains("https://www.zhipin.com/wapi/zpgeek/pc/recommend/job")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/boss.txt",true);
            oSession.SaveResponseBody("D:/ailun/boss.txt");
        }
        if(oSession.uriContains("https://api.m.jd.com/client.action")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/jingdongxiaochengxu.txt",true);
            oSession.SaveResponseBody("D:/ailun/jingdongxiaochengxu.txt");
        }
        if(oSession.uriContains("https://rms.meituan.com/diancan/menu/api/queryDishMoreInfo?")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/manlairouguichufang.txt",true);
            oSession.SaveResponseBody("D:/ailun/manlairouguichufang.txt");
        }
        if(oSession.uriContains("https://wx.waimai.meituan.com/weapp/shop/v1/poi/productlist?ui")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/xiaochengxumeituan.txt",true);
            oSession.SaveResponseBody("D:/ailun/xiaochengxumeituan.txt");
        }
        if(oSession.uriContains("https://wx.waimai.meituan.com/weapp/poi/food/render?ui")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/xiaochengxumeituan01.txt",true);
            oSession.SaveResponseBody("D:/ailun/xiaochengxumeituan01.txt");
        }
        if(oSession.uriContains("https://waimai-guide.ele.me/h5/mtop.alsc.waimai.store.miniapp.store.detail.body.query.v2/1.0/2.0/")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/xiaochengxueleme.txt",true);
            oSession.SaveResponseBody("D:/ailun/xiaochengxueleme.txt");
        }
        if(oSession.uriContains("https://wx.waimai.meituan.com/weapp/v1/poi/food")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/sanjiantao.txt",true);
            oSession.SaveResponseBody("D:/ailun/sanjiantao.txt");
        }
        if(oSession.uriContains("https://app-api.shop.ele.me/nevermore.goods/invoke?method=FoodService2.queryFoodsByGroupGlobalId")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/wangyeeleme.txt",true);
            oSession.SaveResponseBody("D:/ailun/wangyeeleme.txt");
        }
        if(oSession.uriContains("https://wx.waimai.meituan.com/weapp/shop/v1/poi/detail")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/dianpuxinxi.txt",true);
            oSession.SaveResponseBody("D:/ailun/dianpuxinxi.txt");
        }
        if(oSession.uriContains("https://waimai-guide.ele.me/h5/mtop.alsc.wamai.store.detail.miniapp.business.tab.page/1.0/2.0/?")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/elmdianpuxinxi.txt",true);
            oSession.SaveResponseBody("D:/ailun/elmdianpuxinxi.txt");
        }
        if(oSession.uriContains("https://waimai-guide.ele.me/h5/mtop.alsc.wamai.store.detail.business.tab.phone/1.0/2.0/?")){
            oSession.utilDecodeResponse();
            oSession.SaveResponse("D:/ailun/elmdianhua.txt",true);
            oSession.SaveResponseBody("D:/ailun/elmdianhua.txt");
        }`
    }
  },
  {
    id: 5,
    category: "视觉采集助手",
    softwareName: "FastStone Capture 11",
    description: "专业级屏幕捕捉与录制工具。",
    iconName: 'Camera',
    details: [
      "用于快速下载四件套方案。",
      "支持长截图和屏幕录制，便于留存素材。",
      "授权验证 name：bluman serial/序列号/注册码：VPISCJULXUFGDDXYAUYF"
    ]
  }
];

export const CRITICAL_NOTICE: OnboardingStep = {
  id: 6,
  category: "关键里程碑",
  softwareName: "外卖店铺完整运营流程",
  description: "在深入使用工具箱前，必须研读此流程文档。",
  iconName: 'BookOpen',
  isWarning: true,
  details: [
    "位置：呈尚策划工具箱 -> 运营工具分类 -> 外卖店铺完整运营流程。",
    "这是每家店铺运营的基石与铁律。",
    "不熟悉此流程严禁开始实际店铺操作！"
  ]
};

// 引入 axios
import axios from 'axios'

// 数据交互api接口：立即执行函数 (function(){})()，为了不让变量污染全局
var Api = (() => {
    // 对外接口存储对象
    let Fn = window.Fn || {};
    // 新闻模块接口封装
    Fn.news = {
        // 获取新闻列表 vueObj：组件 ，tag: 记录loading设置
        getNewsList : (vueObj, tag) => {
					// 获取的是该城市正在热映电影
					// 详情参见聚合新闻头条API https://developers.douban.com/wiki/?title=movie_v2#in_theaters，
					axios.get('/api/movie/in_theaters', {
					  params: {
					    city: '柳州',
					    start: vueObj.newslist.num,
					    count: vueObj.newslist.loadNum
					  }
					})
					// 请求成功
					.then((result) => {
						if(result.data && result.data.subjects.length){
	            // 累加显示个数          
						  vueObj.newslist.data = vueObj.newslist.data.concat(result.data.subjects);
						  vueObj.newslist.status = true;
						  vueObj.showMore = true;	

						  // 更新显示记录
        			vueObj.newslist.num += vueObj.newslist.loadNum;
	          }	          
	          else{
	          	console.log('无数据');
	          	vueObj.newslist.status = false;  
						  vueObj.showMore = false;        
	          }

						switch(tag)
							{
								// 关闭加载项
								case 1:
									vueObj.loading = false;
									break;
								// 累积加载数值
								case 2:
									vueObj.loading += 1;
									break;

								default:
									console.log('加载出错');
							}
					})
					// 请求失败
					.catch((xhr) => {
					  // 抛出异常
					  console.log(xhr);
					  vueObj.newslist.status = false;
					});
        },
        getNewsData : (vueObj) => {
					// 获取的是电影条目详情
					// 详情参见聚合新闻头条API https://developers.douban.com/wiki/?title=movie_v2#subject，
					axios.get('/api/movie/subject/'+vueObj.newsID)
					// 请求成功
					.then((result) => {
	          if(result.data){
	          	vueObj.newsItems = result.data;
	          	vueObj.isError = false;
	          }	          
	          else{
	          	vueObj.isError = true;
	          	vueObj.errorTxt = '暂无该新闻内容。';
	          }

	          // 关闭加载项
	          vueObj.loading = false;
					})
					// 请求失败
					.catch((xhr) => {
					  // 抛出异常
					  console.log(xhr);
					  vueObj.isError = true;
					  vueObj.errorTxt = '数据获取失败，请检查网络。';
					});
        }
    }
    // 案例模块接口封装
    Fn.case = {
        // 获取案例列表 vueObj：组件 ，tag: 记录loading设置
        getCaseList : (vueObj, tag) => {
        	// 获取即将上映的电影海报照
		      // 详情参见聚合新闻头条API https://developers.douban.com/wiki/?title=movie_v2#in_theaters
		      axios.get('/api/movie/coming_soon', {
		          params: {
		            city: '柳州',
		            count: vueObj.caselist.num
		          }
		        })
		        // 请求成功
		        .then((result) => {
							if(result.data && result.data.subjects.length){
		            // 在显示个数内获取对应数据组          
			          vueObj.caselist.data = result.data.subjects;
			          vueObj.caselist.status = true;
			          // 查看图片格式，豆瓣API里未描述
			          // console.log(result.data.subjects[0].images);
		          }	          
		          else{
		          	console.log('无数据');
		          	vueObj.caselist.status = false;      
		          }

		          switch(tag)
							{
								//关闭加载项
								case 1:
									vueObj.loading = false;
									break;
								// 累积加载数值
								case 2:
									vueObj.loading += 1;
									break;

								default:
									console.log('加载出错');
							}
		        })
		        // 请求失败
		        .catch((xhr) => {
		          // 抛出异常
		          console.log(xhr);
		          vueObj.caselist.status = false;
		      });       
        }
    }
    // 搜索模块接口封装
    Fn.search = {
        // 获取搜索数据
        getSearchList : (vueObj) => {
					// 通过提交的电影类型tag进行数据获取
					// 详情参见豆瓣API https://developers.douban.com/wiki/?title=movie_v2#search
					axios.get('/api/movie/search', {
					  params: {
					    tag: vueObj.tag,
					    start: vueObj.list.num,
					    count: vueObj.list.loadNum
					  }
					})
					// 请求成功
					.then((result) => {						
	          if(result.data && result.data.subjects.length){
	            // 累加显示个数          
						  vueObj.list.data = vueObj.list.data.concat(result.data.subjects);
						  vueObj.list.status = true;
						  vueObj.showMore = true;

						  //更新显示记录
        			vueObj.list.num += vueObj.list.loadNum;
	          }	          
	          else{
	          	console.log('无数据');
	          	vueObj.list.status = false;       
	          }

	          // 关闭加载项
	          vueObj.loading = false;
					})
					// 请求失败
					.catch((xhr) => {
					  // 抛出异常
					  console.log(xhr);
					  vueObj.list.status = false;
					});
        }
    }
    // 在线留言模块接口封装
    Fn.message = {
        // 获取搜索数据
        postMsg : (vueObj) => {
					// 通过提交的电影类型tag进行数据获取
					// 详情参见豆瓣API https://developers.douban.com/wiki/?title=movie_v2#search
					axios.get('/api/movie/search?tag=' + vueObj.txt)
					// 请求成功
					.then((result) => {
						alert('留言已提交，我们将尽快处理！');
					})
					// 请求失败
					.catch((xhr) => {
					  // 抛出异常
					  console.log(xhr);
					  alert('数据提交失败，请重试！');
					});
        }
    }
    // 返回接口对象
    return {
        Fn : Fn
    }
})();

// 输出Api接口
export {
  Api
}
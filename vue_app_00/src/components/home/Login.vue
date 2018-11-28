<template>
  <div class="app-Login">
		<header class="mui-bar mui-bar-nav">
			<h1 class="mui-title">登录</h1>
		</header>
    <div class="mui-content">
			<form id='login-form' class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='account' type="text" class="mui-input-clear mui-input" placeholder="VIP卡号/手机号码">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
				</div>
			</form>
			<div class="mui-content-padded">
				<button id='login' type="button" class="mui-btn mui-btn-block mui-btn-primary">登 录</button>
				<div class="link-area">
					<a id='reg'>注册账号</a> 
					<span class="spliter">|</span> 
					<a id='forgetPassword'>忘记密码</a>
				</div>
			</div>
			<div class="prompt">
				<p>温馨提示：</p>
				<p class="prompt_2">首次登录初始密码默认为身份证后六位，若无法登录请输入“888888”，成功 <a href="#">绑定微信</a> 后可免登录哦！</p>
			</div>
		</div>
  </div>
</template>
<script>
  export default({
		
	})
</script>
<style>
  .app-Login{
		margin-top:20px;
	}
	.app-Login header.mui-bar{
		padding-top:0;
	}
	.app-Login .mui-content .mui-input-group{
		margin-bottom:20px;
	}
	.app-Login .mui-content .mui-content-padded button{
		line-height: 0.42;
		margin-bottom:20px;
		background-color: #c00033;
		border:0;
	}
	.app-Login .mui-content .link-area{
		text-align:center;
		padding-bottom:20px;
	}
	.app-Login .mui-content .link-area a{
		color: #c00033;
	}
	.app-Login .mui-content .link-area span{
		padding:0 8px;
		color: #bbb;
	}
	.app-Login .prompt{
		padding:10px;
	}
	.app-Login .prompt_2{
		text-indent: 30px;
	}
	.app-Login .prompt_2 a{
		color: #c00033;
	}
</style>
$(function(){
	// XSS Recover
	if ($('.html-contents').length > 0) {
		$('.html-contents').html(XSSRecoverTag($('.html-contents').html()));
	}

	//怨듯넻 SCROLL add fixed
	function scrollFixed(){
		var scTop = $(window).scrollTop();
		$('body').addClass('fix')
		$('body').find('#wrap').css({"top":-scTop});
	}

	//怨듯넻 SCROLL remove fixed
	function scrollRemoveFixed(tg_scroll){
		$('body').removeClass('fix');
		if( tg_scroll >= 0 ){
			$(window).scrollTop(tg_scroll);
			$('body').find('#wrap').css({"top":""});
		}
	}

	var $win = $(window),
		header = $('header'),
		isPc = true,
		subTop = $('.subtop_menu'),
		topArea = 0;

	floatingView();

	$win.on('resize', function(){
		$win.width() < 1201 ? isPc = false : isPc = true;
		floatingView();
		reSizeOd();
	}).resize();

	$win.on('scroll', function(){
		var scrT = $win.scrollTop();
		if (isPc == true){
			scrT > 0 ? header.addClass('fixed') : header.removeClass('fixed');
		};
	});

	function floatingView(){
		var topFloat = $('.top_floating'),
			subtopSub = $('.subtop_sub');

		if (subTop.is(":visible")){
			if (subtopSub.is(":visible")){
				topArea = header.height() + subTop.outerHeight() + subtopSub.height() + topFloat.height();
			}else{
				topArea = header.height() + subTop.outerHeight() + topFloat.height();
			}
		}else if ($('#wrap').is('.main') && $win.width() > 950){
			topArea = 0;
		}else{
			topArea = header.height() + topFloat.height();
		}

		if (topFloat.is(":visible")){
			header.css("top",topFloat.height());
			subTop.css("top",topFloat.height() + header.height());
		}else if (topFloat.is(":hidden") && $win.width() > 950){
			header.css("top",0);
			subTop.css("top",header.height());
		}
	}

	//�곷떒硫붾돱
	var submenu = header.find('nav .depth02');
	subDim = header.find('.header_dim');

	header.find('nav').on({
		"mouseenter":function(){
			if (isPc == true){
				header.addClass('fixed');
				submenu.stop().slideDown(300);
				subDim.stop().slideDown(300);
			}
		},
		"mouseleave":function(){
			if (isPc == true ){
				if ($win.scrollTop() == 0){
					header.removeClass('fixed');
				}
				submenu.stop().slideUp(300);
				subDim.stop().slideUp(300);
			}
		}
	});

	var menuBtn = $('header nav h2'),
		mobileMenu = $('.mobile_menu'),
		menuClose = $('.menu_close'),
		mbMenuList = $('.mobile_menu .menu > li');

	menuBtn.on('click', function(){
		mobileMenu.show();
		scrollFixed();
	});

	menuClose.on('click', function(){
		mobileMenu.hide();
		var topCnt = $('body').find('#wrap').css('top'),
			topCnt = topCnt.replace('-',''),
			topCnt = topCnt.replace('px','');
		scrollRemoveFixed(topCnt);
	});

	mbMenuList.find('> a').on('click', function(){
		var thisList = $(this).closest('li'),
			i = thisList.index(),
			mSubMenu = mbMenuList.find('> ul');

		if (thisList.is('.on')){
			thisList.removeClass('on').find('> ul').stop().slideUp();
		}else{
			mbMenuList.removeClass('on').eq(i).addClass('on');
			mSubMenu.stop().slideUp().eq(i).stop().slideDown();
		}
	});

	//�앹뾽
	var popBtn = $('.pop_call'),
		popClose = $('.pop_close_btn');

	popBtn.on('click', function(e){
		e.preventDefault();

		var thisName = $(this).prop('tagName'),
			thisPop;

		if (thisName == "A"){
			thisPop = $(this).attr("href");
		}else{
			thisPop = $(this).attr("pophref");
		}

		$(thisPop).show();
	});

	popClose.on('click', function(e){
		e.preventDefault();
		$(this).closest('.popup_wrap').hide();
	});

	$('.popup_wrap').on('click', function(e){
		if (this == e.target){
			$(this).hide();
		}
	});

	//select
	$('select').selectric();

	//�쒕툕�섏쐞硫붾돱 �몄텧�� �щ갚異붽�
	if ($('.subtop_sub').is(':visible')){
		$('#contents').addClass('toppd');
	}

	//�쒕툕�섏씠吏� �쇨꼍�� header �� �대옒�ㅼ텛媛�
	if ($('#container').is('.sub')){
		$('header').addClass('sub');
	}

	//泥댄겕由ъ뒪��
	var chkList = $('.allchk_list');
	chkList.each(function(){
		var $this = $(this),
			chkbox = $this.find('input[type="checkbox"]').not('.allchk'),
			allChk = $this.find('.allchk');

		chkbox.each(function(){
			$(this).on('change', function(){
				var chkboxLen = chkbox.length,
					chkLen = $this.find('input[type="checkbox"]:checked').not('.allchk').length;
				chkboxLen == chkLen ? allChk.prop("checked",true) : allChk.prop("checked",false);
			});
		});

		allChk.on('change', function(){
			$(this).prop("checked") ? chkbox.prop("checked",true) : chkbox.prop("checked",false);
		});
	});

	var mobile = (/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase()));

	if (mobile) {  //navigator.userAgent�� /iphone|ipad|ipod|android �� �⑥뼱�ы븿�� true �쇰븣
		// �좎��먯씠�꾪듃瑜� 遺덈윭���� OS瑜� 援щ텇�⑸땲��.
		var userAgent = navigator.userAgent.toLowerCase();
		if (userAgent.search("android") > -1){ //�덈뱶濡쒖씠��

		}else if ((userAgent.search("iphone") > -1) || (userAgent.search("ipod") > -1) || (userAgent.search("ipad") > -1)){
			$('.inp_chk, .inp_radio').addClass('inp_ios');
		}
	} else {

	}

	//price
	if($('.price_list').length > 0){
		$('.price_list').slick({
			slidesToShow:3,
			infinite:false,
			appendArrows:".price_ctrl",
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow:1,
						variableWidth:true,
						centerMode:true,
						arrows:false,
						dots:true,
					}
				}
			]
		});
	}

	// 2022-09-05
	if($('.price_new .list').length > 0){
		$('.price_new .list').slick({
			slidesToShow:5,
			infinite:false,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow:1,
						variableWidth:true,
						centerMode:true,
						arrows:false,
						dots:true,
					}
				}
			]
		});
	}

	var priceOpen = $('.price_wrap .open_btn');
	priceOpen.on('click', function(){
		$(this).next('.features').stop().slideToggle();
	});

	//��
	var acTabWrap = $('.activity_tabwrap'),
		acTabBtn = $('.ac_tab label'),
		acTabTxt = acTabWrap.find('.txt_tabcon > div'),
		acTabCon = acTabWrap.find('.ac_tabcon > div'),
		acClass = $('.ac_class'),
		acClassWrap = $('.activity_guidewrap'),
		acClassCon = acClassWrap.find('.class_guide');
// s: 2022-03-25 �섏젙
	acClassWrap.hide();

	acClass.on('click',function(){
		acClassWrap.show();
		var i = $(this).index();
		if(i === 1) {
			acClassWrap.hide();
			// acTabWrap.show();
		} else {
			acTabWrap.hide();
			acClassWrap.show();
			acClassCon.hide();
			if(i === 0) acClassCon.eq(0).show();
			else if(i === 2) acClassCon.eq(1).show();
		}
	});
	// acClass.eq(0).trigger('click');

	acTabWrap.hide();

	/* s: 2022-04-13 異붽� */
	if(acTabWrap.hasClass('oxford')) {
		acTabWrap.show();
		acTabTxt.eq(0).show();
	}
	/* e: 2022-04-13 異붽� */

	acTabBtn.on('click',function(){
		// 2022-10-05 �쇰읉��젣
		// if($(this).hasClass('soon')) {
		// 	alert('Comming soon');
		// 	return;
		// }

		acTabWrap.show();
		var i = $(this).index();
		acTabTxt.hide().eq(i).show();
		acTabCon.hide().eq(i).show();

		// 2022-10-05 �대떦 �몃뜳�ㅼ쓽 肄섑뀗痢좊쭔 �대┃
		// if($('.ma_list').length > 0) {
		// 	$('.ma_list li:first-of-type').trigger('click');
		// }
		const thisMaList = acTabCon.eq(i).find('.ma_list');
		if(thisMaList.length > 0) {
			thisMaList.find('li:first-of-type').trigger('click');
		}

		// 2022-10-05 紐⑤컮�쇱뿉�� �덉뒯 蹂댁엫
		if($(this).hasClass('lesson_m_view')) {
			acTabWrap.find('.wrapper').addClass('m_view');
		} else {
			acTabWrap.find('.wrapper').removeClass('m_view');
		}
	});

	/* s: 2022-04-13 異붽� */
	var maTab = $('.ma_list li');

	// 2022-09-05 �섏젙
	maTab.on('click',function(){
		$(this).parent().children().removeClass('on');
		$(this).addClass('on');
		const thisIdx = $(this).index();
		const video = $(this).parent().siblings('.video');
		if(video.length > 0) {
			for(let i = 0; i < video.children().length; i++) {
				if(i === thisIdx) video.children().eq(i).show();
				else video.children().eq(i).hide();
			}
		}
	});
	/* e: 2022-04-13 異붽� */

	//�대턿 ��
	var ebookwrap = $('.ebook_wrap'),
		ebooktab = ebookwrap.find('.tab_box > div'),
		ebooktabSub = ebooktab.find('.inner'),
			/* s: 2022-04-13 �섏젙 */
			// ebooklink = ebooktabSub.find('> li > a'),
			ebooklink = ebookwrap.find('.ebooklink'),
			nolink = ebookwrap.find('.nolink'),
			/* s: 2022-04-13 �섏젙 */
		ebookBox = ebookwrap.find('.tab_con .ebook_tabbox');

	ebooktab.on({
		'mouseenter':function(e){
			e.preventDefault();
			var i = $(this).index();

			ebooktab.addClass('off').eq(i).removeClass('off');
			ebooktabSub.hide().eq(i).show();
		},
		'mouseleave':function(e){
			ebooktabSub.hide();
		}
	});

	ebooklink.on('click', function(e){
		e.preventDefault();
		var thisEbook = $(this).attr('href'),
			thisTab = $(this).closest('div');

		ebooktab.addClass('off');
		thisTab.removeClass('off');
		ebooktabSub.hide();
		ebookBox.find('iframe').attr("src","https://book.allviaedu.com/view/index.html?contbase=/" + thisEbook + "/&title=abcd&viewtype=html5");
	});

	/* s: 2022-04-13 異붽� */
	nolink.on('click', function(e){
		e.preventDefault();
		alert('Coming soon');
	});
	/* s: 2022-04-13 異붽� */

	//�쇰컲 ��
	var normalTab = $('.normal_tab');

	normalTab.each(function(){
		var nmTab = $(this).find('.nm_tab li'),
			nmCon = $(this).find('.nm_tabcon > div');

		nmTab.on('click', function(){
			var i = $(this).index();
			nmTab.removeClass('on').eq(i).addClass('on');
			nmCon.hide().eq(i).show();
		});

		nmTab.eq(0).trigger('click');
	});

	// [s] 2022-09-30 �꾩퐫�붿뼵 ��
	var accordion = $('.accordion'),
		topFloat = $('.top_floating'),
		subtopSub = $('.subtop_sub'),
		topHeight = 0;

	if(subtopSub.is(":visible")){
		if(topFloat.is(":visible")){
			topHeight = header.height() + subTop.outerHeight() + subtopSub.height() + topFloat.height();
		} else {
			topHeight = header.height() + subTop.outerHeight() + subtopSub.height();
		}
	} else {
		if(topFloat.is(":visible")){
			topHeight = header.height() + subTop.outerHeight() + topFloat.height();
		} else {
			topHeight = header.height() + subTop.outerHeight();
		}
	}

	accordion.each(function(){
		var aTab = $(this).find('li');

		aTab.find('h6').on('click', function(){
			var i = $(this).parent().index(),
				prevTabHeight = 0,
				thisTop = aTab.eq(0).offset().top,
				margin = parseInt(aTab.eq(0).css('marginBottom').replace(/[^-\d\.]/g, ''));

			for(let j = 0; j < i; j++) {
				prevTabHeight += aTab.eq(j-1).find('h6').outerHeight();
			}

			thisTop = aTab.eq(0).offset().top + prevTabHeight + (margin*i);

			if(aTab.eq(i).hasClass('on')) {
				aTab.eq(i).removeClass('on');
			} else {
				aTab.removeClass('on').eq(i).addClass('on');
				$('html').animate({scrollTop: thisTop - topHeight}, 400);
			}
		});

		aTab.eq(0).trigger('click');
	});
	// [e] 2022-09-30

	// #accordion 留곹겕 �대┃
	const aTab1 = $('.accordion li');
	if(location.hash === '#accordion') {
		prevTabHeight = 0,
		thisTop = aTab1.eq(0).offset().top,
		margin = parseInt(aTab1.eq(0).css('marginBottom').replace(/[^-\d\.]/g, ''));

		for(let j = 0; j < 3; j++) {
			prevTabHeight += aTab1.eq(j-1).find('h6').outerHeight();
		}

		thisTop = aTab1.eq(0).offset().top + prevTabHeight + (margin*3);

		$('html').animate({scrollTop: thisTop - topHeight}, 400);
	}

	//釉뚮줈�� �ㅼ슫
	var broBtn = $('.brochure .btn_wrap a');

	broBtn.on('click', function(e){
		e.preventDefault();
		var selectBro = $('.bro_radio input[type="radio"]:checked').attr("id");
		console.log(selectBro);
		window.open('about:blank').location.href='https://book.allviaedu.com/view/index.html?contbase=/' + selectBro + '/&title=abcd'
	});

	//price anchor
	var anchor = $('.anchor li')

	anchor.on('click', function(e){
		e.preventDefault();
		var thisAn = $(this).find('> a').attr("href").replace("#",".");
		thisSpot = $(thisAn).offset().top - topArea;

		if (thisAn == '.price01') thisSpot = 0;
		if ($(this).closest('.anchor').is('.feature_an')){
			thisSpot = $(thisAn).offset().top - topArea;
		}

		$('html, body').animate({
			scrollTop:thisSpot
		});
	});

	// 220117 �⑤뵫媛� 異붽�
	console.log('price_con pb =', parseInt($('.price01').css('padding-bottom')));

	$(window).scroll(() => {
		var paddingBottom = parseInt($('.price01').css('padding-bottom'));

		var spot02, spot03, spot04;
		if($('.price02').length !== 0) spot02 = $('.price02').offset().top - topArea - paddingBottom;
		if($('.price03').length !== 0) spot03 = $('.price03').offset().top - topArea - paddingBottom;
		if($('.price04').length !== 0) spot04 = $('.price04').offset().top - topArea - paddingBottom;

		$('.anchor li').removeClass('on');

		if($('html, body').scrollTop() < spot02) {
			$('.anchor li:nth-child(1)').addClass('on');
		} else if(spot02 <= $('html, body').scrollTop() && $('html, body').scrollTop() < spot03) {
			$('.anchor li:nth-child(2)').addClass('on');
		} else if(spot03 <= $('html, body').scrollTop() && $('html, body').scrollTop() < spot04) {
			$('.anchor li:nth-child(3)').addClass('on');
		} else if(spot04 <= $('html, body').scrollTop()) {
			$('.anchor li:nth-child(4)').addClass('on');
		}
	});

	$win.on("hashchange", function(){
		scrollMove()
	});

	if (location.href.match("#") !== null && location.hash !== '#accordion'){
		scrollMove()
	};

	function scrollMove(){
		if (location.hash !== '#;'){
			var moveClass = location.hash.replace("#","."),
				moveTop = $(moveClass).position().top;

			if (moveClass == '.price01') moveTop = 0;

			$('body, html').animate({
				scrollTop:moveTop
			}, 700);
		}
	}

	//yes
	var yesWrap = $('.yes_chk_wrap');
	yesWrap.each(function(){
		var yesBtn = $(this).find('.this_chk'),
			yesInp = $(this).find('.this_inp');

		$(this).find('input').on('change', function(){
			if (yesBtn.find('input').prop("checked")){
				if (yesInp.prop('tagName') == "INPUT"){
					yesInp.removeClass('disable').removeAttr("disabled");
				}else{
					yesInp.removeClass('disable').find('input').removeAttr("disabled");
				}
			}else{
				if (yesInp.prop('tagName') == "INPUT"){
					yesInp.addClass('disable').attr("disabled","disabled");
				}else{
					yesInp.addClass('disable').find('input').attr("disabled","disabled");
				}
			}
		});
	});

	//�꾩옱 �섏씠吏� 紐⑤컮�� 硫붾돱 �쇱묠
	var cntPage = $('.current');
	cntPage.closest('ul').prev('a').trigger("click");

	$('.no_btn').on('click', function(e){
		e.preventDefault();
	});

	$('.ac_tab li').on('click', function(e){
		e.preventDefault();
		$('body, html').animate({
			scrollTop:$('.activity_tabwrap').position().top
		},500);
	});

	if(getCookie("lang") === "ja") {
		$('body').addClass("lang_jp");
	}

	if(getCookie("lang") === "es") {
		$('body').addClass("lang_es");
	}

	// 2022-10-06 �몄뼱 �대옒�� �곸슜 �� 蹂댁엫
	$('body').css('visibility', 'visible');

	// 2022-10-11 od �꾩튂 議곗젙
	function reSizeOd(){
		if(getCookie("lang") === "es") {
			if($win.width() > 950){
				$('.oxf_tool .tool_text_list').addClass("es");
			}else{
				$('.oxf_tool .tool_text_list').removeClass("es");
			}
		}
	}
});

function XSSRemoveTag(str) {
	let sting = str

	sting = sting.replaceAll("<", "&lt;");
	sting = sting.replaceAll(">", "&gt;");
	sting = sting.replaceAll("\"", "&#34;");
	sting = sting.replaceAll("'", "&#39;");
	sting = sting.replaceAll("%00", "null;");
	sting = sting.replaceAll("%", "&#37;");

	return sting;
}

function XSSRecoverTag(str) {
	let sting = str

	sting = sting.replaceAll("&lt;", "<");
	sting = sting.replaceAll("&gt;", ">");
	sting = sting.replaceAll("&#34;", "\"");
	sting = sting.replaceAll("&#39;", "'");
	sting = sting.replaceAll("null;", "%00");
	sting = sting.replaceAll("&#37;", "%");

	return sting;
}

function getCookie(cName) {
	cName = cName + '=';
	let cookieData = document.cookie;
	let start = cookieData.indexOf(cName);
	let cValue = '';
	if (start != -1) {
		start += cName.length;
		let end = cookieData.indexOf(';', start);
		if (end == -1) end = cookieData.length;
		cValue = cookieData.substring(start, end);
	}
	return unescape(cValue);
}
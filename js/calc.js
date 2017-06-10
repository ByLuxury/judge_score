$(function(){
	$(".btn").click(function(){
		var judgeScore=new Array();//评分存入数组
		var maxScore;
		var minScore;
		var avgScore;
		var sum=0;
		var whichBtn=$(this).attr("id");//判断点击的是那一个按钮
		console.log(whichBtn);
		var v;//迭代input的字符串
		switch(whichBtn){
			case "btn-one-calc": //选中计算一号选手按钮
			v="input[class=one-person-judge]";//迭代一号选手的评分
			break;
			case "btn-two-calc":
			v="input[class=two-person-judge]"; 
			break;

			case "btn-three-calc":
			v="input[class=three-person-judge]";
			break;
			case "btn-four-calc":
			v="input[class=four-person-judge]";
			break;

			case "btn-five-calc":
			v="input[class=five-person-judge]";
			break;

			case "btn-six-calc":
			v="input[class=six-person-judge]";
			break;

			case "btn-seven-calc":
			v="input[class=seven-person-judge]";
			break;
			case "btn-eight-calc":
			v="input[class=eight-person-judge]";
			break;

			case "btn-nine-calc":
			v="input[class=nine-person-judge]";
			break;

			case "btn-ten-calc":
			v="input[class=ten-person-judge]";
			break;

			case "btn-eleven-calc":
			v="input[class=eleven-person-judge]";
			break;
			default:break;

		}
		
		var n=0;
		$(v).each(function(i){
			if($(this).val()!=''){
				judgeScore[n]=parseFloat($(this).val());
				n++;
			}

		});
		console.log('未去掉最高分最低分数组长度:'+judgeScore.length);
		console.log('排序前:'+judgeScore);
		var temp;
		//冒泡排序法
		for(var i=0;i<judgeScore.length-1;i++)
			for(var j=0;j<judgeScore.length-1-i;j++){
				if(judgeScore[j]>judgeScore[j+1]){
					temp=judgeScore[j];
					judgeScore[j]=judgeScore[j+1];
					judgeScore[j+1]=temp;
				}
			}
			for(var i=1;i<judgeScore.length-1;i++){
				sum+=judgeScore[i];//计算总分
			}
			
			avgScore=sum/(judgeScore.length-2);
			console.log('排序后:'+judgeScore);
			minScore=judgeScore[0];//最低分
			maxScore=judgeScore[judgeScore.length-1]//最高分
			console.log('最低分:'+minScore+',最高分:'+maxScore+',平均分:'+avgScore.toFixed(2));
			
			//赋值：最高分、最低分、平均分
			switch(whichBtn){
			case "btn-one-calc": 
			$("#one-person-max").text(maxScore);
			$("#one-person-min").text(minScore);
			$("#one-person-avg").text(avgScore.toFixed(2));//保留两位小数
			$("#one-person-avg").css("color","red");
			break;
			case "btn-two-calc":
			$("#two-person-max").text(maxScore);
			$("#two-person-min").text(minScore);
			$("#two-person-avg").text(avgScore.toFixed(2));
			$("#two-person-avg").css("color","red");
			break;

			case "btn-three-calc":
			$("#three-person-max").text(maxScore);
			$("#three-person-min").text(minScore);
			$("#three-person-avg").text(avgScore.toFixed(2));
			$("#three-person-avg").css("color","red");
			break;
			case "btn-four-calc":
			$("#four-person-max").text(maxScore);
			$("#four-person-min").text(minScore);
			$("#four-person-avg").text(avgScore.toFixed(2));
			$("#four-person-avg").css("color","red");
			break;

			case "btn-five-calc":
			$("#five-person-max").text(maxScore);
			$("#five-person-min").text(minScore);
			$("#five-person-avg").text(avgScore.toFixed(2));
			$("#five-person-avg").css("color","red");
			break;

			case "btn-six-calc":
			$("#six-person-max").text(maxScore);
			$("#six-person-min").text(minScore);
			$("#six-person-avg").text(avgScore.toFixed(2));
			$("#six-person-avg").css("color","red");
			break;

			case "btn-seven-calc":
			$("#seven-person-max").text(maxScore);
			$("#seven-person-min").text(minScore);
			$("#seven-person-avg").text(avgScore.toFixed(2));
			$("#seven-person-avg").css("color","red");
			break;
			case "btn-eight-calc":
			$("#eight-person-max").text(maxScore);
			$("#eight-person-min").text(minScore);
			$("#eight-person-avg").text(avgScore.toFixed(2));
			$("#eight-person-avg").css("color","red");
			break;

			case "btn-nine-calc":
			$("#nine-person-max").text(maxScore);
			$("#nine-person-min").text(minScore);
			$("#nine-person-avg").text(avgScore.toFixed(2));
			$("#nine-person-avg").css("color","red");
			break;

			case "btn-ten-calc":
			$("#ten-person-max").text(maxScore);
			$("#ten-person-min").text(minScore);
			$("#ten-person-avg").text(avgScore.toFixed(2));
			$("#ten-person-avg").css("color","red");
			break;

			case "btn-eleven-calc":
			$("#eleven-person-max").text(maxScore);
			$("#eleven-person-min").text(minScore);
			$("#eleven-person-avg").text(avgScore.toFixed(2));
			$("#eleven-person-avg").css("color","red");
			break;

		}

	});

});
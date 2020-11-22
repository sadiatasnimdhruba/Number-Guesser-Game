val=Math.floor(Math.random()*11);
correct_ans=val;
console.log(correct_ans);
var x;
var flag=0;

for(var i=1;i<=3;i++)
{
	x=prompt("Enter a number :");

	if(correct_ans<x)
	{
		alert("Correct answer is smaller!!");
	}
	else if(correct_ans>x)
	{
		alert("Correct answer is greater!!");
	}
	else
	{
		flag=1;
		break;
	}
}
if(flag==1)
{
	document.getElementById("demo").innerHTML="You win :)";
}
else
{
	document.getElementById("demo1").innerHTML="You loss:(";
}

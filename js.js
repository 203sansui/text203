window.addEventListener('load',function(){
    var arrow_l=this.document.querySelector('.arrow-l');
    var arrow_r=this.document.querySelector('.arrow-r');
    var focus=document.querySelector('.foucs');

    focus.addEventListener('mouseenter',function(){
        arrow_l.style.display='block';
        arrow_r.style.display='block';
    })
    focus.addEventListener('mouseleave',function(){
        arrow_l.style.display='none';
        arrow_r.style.display='none';
    })

    var ul=focus.querySelector('ul');
    var ol=focus.querySelector('ol');
    var len=ul.children.length;
    var focusWidth=focus.offsetWidth;//获取图片宽度
    var circle=0;
    for(var i=0;i<len;i++){
        // 创建li，插入ol中
        var li=document.createElement('li');
        ol.appendChild(li);
        // 设置li的自定义索引属性
        li.setAttribute('index',i);
        // 排它思想 清空类名
        li.addEventListener('click',function(){
            for(var i=0;i<len;i++){
                ol.children[i].className='';
            }    
            this.className='current';//绑定li点击事件

            var index = this.getAttribute('index');//点击圆圈获取索引号
            
            // 当点击li时，将li的索引号给num,circle
            num=index;
            circle=index;
            console.log(focusWidth);
            console.log(index);
            animate(ul, -index * focusWidth);
        })
    }
    ol.children[0].className='current';
    // 克隆第一张图片（在小圆圈生成后克隆）
    var first =ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num=0;
    //右移
    arrow_r.addEventListener('click',function(){
        if(num==len-1){
            ul.style.left=0;
            num=0;
        }
        num++;
        animate(ul,-num*focusWidth);
        // 圆点跟随图片移动
        circle++;
        if(circle==len)circle=0;

        for(var i=0;i<len;i++){
            ol.children[i].className='';
        }
        ol.children[circle].className='current';
    })
    //向左移动
    arrow_l.addEventListener('click',function(){
        if(num==0){
            num=len-1;
            ul.style.left=num*focusWidth+'px';
        }
        num--;
        animate(ul,-num*focusWidth);
        // 圆点跟随图片移动
        circle--;
        if(circle==-1)circle=len-1;
        
        for(var i=0;i<len;i++){
            ol.children[i].className='';
        }
        ol.children[circle].className='current';
    })
    //手动调用事件:向左、右移动
    var timer=this.setInterval(function(){
        // arrow_r.click();
    },2000)
})
const a0_0x5931b1=a0_0x5b6c;(function(_0x32bf48,_0x9e4b44){const _0x3c3f95=a0_0x5b6c,_0x3856d4=_0x32bf48();while(!![]){try{const _0x5ad14c=parseInt(_0x3c3f95(0x16c))/0x1+parseInt(_0x3c3f95(0x146))/0x2*(parseInt(_0x3c3f95(0x15f))/0x3)+-parseInt(_0x3c3f95(0x17d))/0x4+-parseInt(_0x3c3f95(0x16f))/0x5+-parseInt(_0x3c3f95(0x17c))/0x6*(parseInt(_0x3c3f95(0x182))/0x7)+-parseInt(_0x3c3f95(0x169))/0x8+parseInt(_0x3c3f95(0x172))/0x9*(parseInt(_0x3c3f95(0x153))/0xa);if(_0x5ad14c===_0x9e4b44)break;else _0x3856d4['push'](_0x3856d4['shift']());}catch(_0x5dfa9a){_0x3856d4['push'](_0x3856d4['shift']());}}}(a0_0x3ae7,0x613e5));function a0_0x5b6c(_0x397335,_0x4e31ea){const _0x3ae7f8=a0_0x3ae7();return a0_0x5b6c=function(_0x5b6c64,_0x5e62bc){_0x5b6c64=_0x5b6c64-0x145;let _0x1bfe59=_0x3ae7f8[_0x5b6c64];return _0x1bfe59;},a0_0x5b6c(_0x397335,_0x4e31ea);}function a0_0x3ae7(){const _0x22f135=['textContent','centeredButton','play','#openCameraButton','你輸了！','不告訴你一個大驚喜說不過去了!!\x20🤐\x20🤐','連勝：','green','getElementById','玩家出拳：','download','imageClassifier','342670LeOlAP','random','floor','href','完成成就:連勝4次!','style','#playerR','button','#computerR','偷偷跟你說...','flipImage','model.json','9IOwCQR','achievementMessage1','playgameButton','mousePressed','完成成就:連勝2次!','平手！','33.jpg','勝負結果：\x20','天哪!太神勒','https://teachablemachine.withgoogle.com/models/ZvWH5r3Af/','5034184tTyxyg','innerText','class','699758WXoKBQ','Player\x20choice:','阿光家住在高雄，而且有好多工廠\x20💪\x20💪','567990eLzSVE','size','這次我決定送你一張他的照片!','135iorjzr','label','電腦出拳：','完成成就:連勝5次!','Computer\x20choice:','#classification_result','achievementMessage','click','error','achievementMessage3','6JGlIle','517748cxUkjo','html','classify','length','開始遊戲!','5164229DascuC','count','createElement','color','阿光帥照\x20😎','529734UoyeOy'];a0_0x3ae7=function(){return _0x22f135;};return a0_0x3ae7();}let classifier,imageModelURL=a0_0x5931b1(0x168),video,flippedVideo,playerChoice='',computerChoice='',countdown=0x5,timerInterval,cameraOpened=![];const BUTTON_CLASS=a0_0x5931b1(0x148),BUTTON_CLASS_01=a0_0x5931b1(0x161);function preload(){const _0x1870aa=a0_0x5931b1;classifier=ml5[_0x1870aa(0x152)](imageModelURL+_0x1870aa(0x15e));}function setup(){const _0x4ebf4d=a0_0x5931b1;createCanvas(0x140,0x104),video=createCapture(VIDEO),video[_0x4ebf4d(0x170)](0x140,0xf0),video['hide']();let _0x1d0866=createButton(_0x4ebf4d(0x181));_0x1d0866[_0x4ebf4d(0x16b)](BUTTON_CLASS_01),_0x1d0866[_0x4ebf4d(0x162)](startGame);}function draw(){background(0x0),flippedVideo&&image(flippedVideo,0x0,0x0);}function startGame(){const _0x8ce17a=a0_0x5931b1;if(!cameraOpened){let _0x27f457=createButton('猜拳');_0x27f457[_0x8ce17a(0x16b)](BUTTON_CLASS),_0x27f457[_0x8ce17a(0x162)](openCamera);return;}let _0x4af2f8=select(_0x8ce17a(0x14a));_0x4af2f8&&_0x4af2f8['hide']();let _0x499c37=select(_0x8ce17a(0x15a));_0x499c37&&_0x499c37['hide'](),classifyVideo(),timerInterval=setInterval(updateCountdown,0x3e8);}function openCamera(){const _0x140cc3=a0_0x5931b1;video[_0x140cc3(0x149)](),cameraOpened=!![];let _0xb3afda=select(_0x140cc3(0x14a));_0xb3afda&&_0xb3afda['hide'](),startGame();}function classifyVideo(){const _0x9f8719=a0_0x5931b1;flippedVideo=ml5[_0x9f8719(0x15d)](video),classifier[_0x9f8719(0x17f)](flippedVideo,gotResult);}function gotResult(_0xc84e58,_0x2e4c1a){const _0x59889b=a0_0x5931b1;if(_0xc84e58){console[_0x59889b(0x17a)](_0xc84e58);return;}playerChoice=_0x2e4c1a[0x0][_0x59889b(0x173)],console['log'](_0x59889b(0x16d),playerChoice),clearInterval(timerInterval),generateComputerChoice(),compareChoices();}function generateComputerChoice(){const _0x33da6a=a0_0x5931b1;let _0xccd283=['剪刀','石頭','布'];computerChoice=_0xccd283[Math[_0x33da6a(0x155)](Math[_0x33da6a(0x154)]()*_0xccd283[_0x33da6a(0x180)])],console['log'](_0x33da6a(0x176),computerChoice);}function compareChoices(){const _0x5ebfc6=a0_0x5931b1;let _0x170add;if(playerChoice===computerChoice)_0x170add=_0x5ebfc6(0x164);else playerChoice==='剪刀'&&computerChoice==='布'||playerChoice==='石頭'&&computerChoice==='剪刀'||playerChoice==='布'&&computerChoice==='石頭'?(_0x170add='你贏了！',updateWinStreak(_0x170add)):(_0x170add=_0x5ebfc6(0x14b),winStreak=0x0);let _0x536c87=select(_0x5ebfc6(0x177));_0x536c87[_0x5ebfc6(0x17e)](_0x5ebfc6(0x166)+_0x170add);let _0x26a213=select(_0x5ebfc6(0x15b));_0x26a213[_0x5ebfc6(0x17e)](_0x5ebfc6(0x174)+computerChoice);let _0xaa85e8=select(_0x5ebfc6(0x159));_0xaa85e8['html'](_0x5ebfc6(0x150)+playerChoice);}let winStreak=0x0,achievementUnlocked=![],threeWinsUnlocked=![],fourWinsUnlocked=![],fiveWinsUnlocked=![];function updateWinStreak(_0x4eb227){const _0x3d9e3d=a0_0x5931b1;let _0x5b6f32=document[_0x3d9e3d(0x14f)](_0x3d9e3d(0x183));if(_0x4eb227==='你贏了！'){winStreak++,_0x5b6f32[_0x3d9e3d(0x147)]=_0x3d9e3d(0x14d)+winStreak;if(winStreak===0x2&&!achievementUnlocked)unlockAchievement(),achievementUnlocked=!![];else{if(winStreak===0x3&&!threeWinsUnlocked)unlockAchievement2(),threeWinsUnlocked=!![];else{if(winStreak===0x4&&!fourWinsUnlocked)unlockAchievement3(),fourWinsUnlocked=!![];else winStreak===0x5&&!fiveWinsUnlocked&&(unlockAchievement4(),fiveWinsUnlocked=!![]);}}}else winStreak=0x0,threeWinsUnlocked=![],fourWinsUnlocked=![],fiveWinsUnlocked=!![],achievementUnlocked=![],_0x5b6f32[_0x3d9e3d(0x147)]=_0x3d9e3d(0x14d)+winStreak;}function unlockAchievement(){const _0x24b32f=a0_0x5931b1;let _0x5d487b=document[_0x24b32f(0x14f)](_0x24b32f(0x178));alert(_0x24b32f(0x163)),_0x5d487b[_0x24b32f(0x16a)]='阿光其實就是...邱光諺！',_0x5d487b[_0x24b32f(0x158)][_0x24b32f(0x185)]=_0x24b32f(0x14e);}function unlockAchievement2(){const _0x9f6e15=a0_0x5931b1;let _0x2736de=document[_0x9f6e15(0x14f)](_0x9f6e15(0x178));_0x2736de['innerText']='';let _0x378a3e=document['getElementById'](_0x9f6e15(0x160));alert('完成成就:連勝3次!'),alert('你真厲害!'),alert(_0x9f6e15(0x15c)),_0x378a3e['innerText']=_0x9f6e15(0x16e),_0x378a3e[_0x9f6e15(0x158)][_0x9f6e15(0x185)]='green';}function unlockAchievement3(){const _0x1e97ed=a0_0x5931b1;let _0x25cf31=document[_0x1e97ed(0x14f)]('achievementMessage2');_0x25cf31[_0x1e97ed(0x16a)]='',alert(_0x1e97ed(0x157)),alert(_0x1e97ed(0x167)),alert(_0x1e97ed(0x14c)),_0x25cf31['innerText']='阿光交了兩次女朋友\x20😎',_0x25cf31[_0x1e97ed(0x158)][_0x1e97ed(0x185)]='green';}function unlockAchievement4(){const _0x249a15=a0_0x5931b1;let _0x4b120c=document[_0x249a15(0x14f)](_0x249a15(0x17b));_0x4b120c[_0x249a15(0x16a)]='',alert(_0x249a15(0x175)),alert('你真的運氣太好了'),alert(_0x249a15(0x171));let _0x4f26b7=document[_0x249a15(0x184)]('a'),_0x43c012='C:UsersBenDesktopG03_期末報告\x1b.jpg';_0x4f26b7[_0x249a15(0x156)]=_0x43c012,_0x4f26b7[_0x249a15(0x151)]=_0x249a15(0x165),_0x4f26b7[_0x249a15(0x179)](),_0x4b120c[_0x249a15(0x16a)]=_0x249a15(0x145),_0x4b120c[_0x249a15(0x158)]['color']='green';}
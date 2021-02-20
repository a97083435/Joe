$(function () {
    $('#wmd-editarea textarea').attr('placeholder', '请输入文章内容...（开启粘贴上传功能后，支持图片粘贴上传哦~）');
    $('#wmd-button-bar .wmd-edittab').remove();
    $('#wmd-button-row .wmd-spacer').remove();
    $('#wmd-button-row #wmd-code-button').remove();
    $('#wmd-fullscreen-button').on('click', function () {
        $('.fullscreen #text').css('top', $('.fullscreen #wmd-button-bar').outerHeight());
    });
    /* 增加自定义功能 */
    const items = [
        {
            title: '回复可见',
            id: 'wmd-hide-button',
            svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" ><path d="M554.666667 438.101333V277.333333h-85.333334v160.768L330.112 357.717333l-42.666667 73.898667L426.666667 512l-139.221334 80.384 42.666667 73.898667L469.333333 585.898667V746.666667h85.333334v-160.768l139.221333 80.384 42.666667-73.898667L597.333333 512l139.221334-80.384-42.666667-73.898667L554.666667 438.101333z" p-id="15752" fill="#9b9b9b"></path></svg>'
        },
        {
            title: '网易云歌单',
            id: 'wmd-mlist-button',
            svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M806.3 435.8L553.8 320c-17.4-8-38.2-0.9-46.5 15.8l-123.2 248c-8.2-7.9-17.7-14.9-28.8-20-52.3-24-114.8-2.7-139.8 47.5-25 50.2-2.8 110.3 49.4 134.3 52.3 24 114.8 2.7 139.8-47.5l120.5-242.4c8.3-16.7 29.1-23.8 46.5-15.8L698 497.7c17.4 8 24.7 28 16.4 44.7l-78.1 157.1c-8.2-7.9-17.7-14.9-28.8-20-52.3-24-114.8-2.7-139.8 47.5-25 50.2-2.8 110.3 49.4 134.3 52.3 24 114.8 2.7 139.8-47.5l165.7-333.2c8.4-16.8 1.1-36.8-16.3-44.8zM269.7 358c-28.8 17.1-37.8 53.5-19.9 81.2 17.8 27.7 55.7 36.3 84.5 19.1 28.8-17.1 37.8-53.5 19.9-81.2L268 243.4c-5.9-9.2-3-21.3 6.6-27l17.4-10.3c9.6-5.7 12.6-17.9 6.7-27.1L288 162.3c-6-9.2-18.6-12.1-28.2-6.4l-52.2 31c-9.6 5.7-12.6 17.8-6.6 27l88 136.9c-6.6 1.3-13.2 3.6-19.3 7.2z" p-id="32541" fill="#9b9b9b"></path></svg>'
        },
        {
            title: '网易云音乐',
            id: 'wmd-music-button',
            svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M263.714782 756.045051a111.4112 141.312 83.299 1 0 280.693286-32.978849 111.4112 141.312 83.299 1 0-280.693286 32.978849Z" p-id="25774" fill="#9b9b9b"></path><path d="M497.664 228.9664h23.7568c13.1072 0 23.7568 10.6496 23.7568 23.7568V737.28H497.664V228.9664z" p-id="25775" fill="#9b9b9b"></path><path d="M593.92 294.2976c-32.768-14.7456-55.7056-47.7184-55.7056-86.4256 0-28.672 13.1072-54.4768 33.3824-71.68-42.3936 9.4208-73.9328 47.104-73.9328 92.16 0 52.224 41.7792 94.4128 94.0032 94.4128h2.2528v-28.4672z" p-id="25776" fill="#9b9b9b"></path><path d="M681.984 422.912c0-76.3904-61.8496-138.24-138.24-138.24-16.1792 0-31.744 2.8672-46.08 7.7824v38.912c9.8304-2.4576 20.0704-3.6864 30.72-3.6864 71.2704 0 129.024 57.7536 129.024 129.024 0 24.1664-6.7584 46.8992-18.2272 66.1504C665.6 497.664 681.984 462.2336 681.984 422.912z" p-id="25777" fill="#9b9b9b"></path></svg>'
        },
        {
            title: 'BiliBili视频',
            id: 'wmd-bili-button',
            svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M776.192 239.552h-135.392l61.344-61.344c10.592-10.592 10.592-25.376 0-35.968s-25.376-10.592-35.968 0l-103.648 103.68h-101.536l-103.68-103.648c-8.448-10.592-21.152-12.704-33.856-6.336-2.112 0-2.112 2.112-4.224 4.224-10.592 10.592-10.592 25.376 0 35.968l63.456 63.456H247.296c-74.048 0-135.392 61.344-135.392 135.392V711.36c0 71.936 61.344 133.28 135.392 133.28h21.152c0 25.376 21.152 44.416 44.416 44.416s44.416-21.152 44.416-44.416h313.12c2.112 25.376 23.264 44.416 48.672 42.304a45.504 45.504 0 0 0 42.304-42.304h16.928c74.048 0 135.392-61.344 135.392-135.392V372.864c-2.112-74.048-63.456-133.28-137.504-133.28z m-4.256 522.56H255.712c-27.488 0-48.672-23.264-50.784-50.784l-2.112-342.72a51.52 51.52 0 0 1 50.784-50.784h516.224c27.488 0 48.672 23.264 50.784 50.784l2.112 342.72c-2.112 29.6-23.264 50.784-50.784 50.784zM422.88 434.176l12.704 63.456-169.248 31.744-12.704-63.456 169.248-31.744z m162.88 63.488l12.704-63.456 169.248 31.744-12.704 63.456-169.248-31.744z m33.856 133.28c0 2.112 0 6.336-2.112 8.448-10.592 23.264-33.856 38.08-61.344 40.192a59.456 59.456 0 0 1-44.416-21.152c-12.704 12.704-27.488 21.152-44.416 21.152a77.344 77.344 0 0 1-61.344-40.192c0-2.112-2.112-4.224-2.112-8.448 0-8.448 6.336-14.816 14.816-16.928h2.112c6.336 0 10.592 2.112 12.704 8.448 0 0 16.928 23.264 31.744 23.264 29.632 0 29.632-25.376 46.528-44.416 19.04 21.152 19.04 44.416 46.528 44.416 19.04 0 31.744-23.264 31.744-23.264 2.112-4.224 8.448-8.448 12.704-8.448 8.448-2.112 14.816 4.224 16.928 12.704v4.224h0.032z" p-id="40668" fill="#9b9b9b"></path></svg>'
        },
        {
            title: 'DPlayer视频',
            id: 'wmd-dplayer-button',
            svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M858.88 244.48h-182.016l61.184-61.184a25.6 25.6 0 0 0-36.096-36.096l-97.536 97.28h-182.528l-97.28-97.28a25.6 25.6 0 0 0-36.352 0 25.6 25.6 0 0 0 0 36.096l61.184 61.184h-181.76a25.6 25.6 0 0 0-25.6 25.6v490.752a25.6 25.6 0 0 0 25.6 25.6h691.2a25.6 25.6 0 0 0 25.6-25.6V270.08a25.6 25.6 0 0 0-25.6-25.6z m-25.6 490.752h-640V295.68h640zM743.68 832.256h-460.8a25.6 25.6 0 0 0 0 51.2h460.8a25.6 25.6 0 1 0 0-51.2z" p-id="46595" fill="#9b9b9b"></path><path d="M439.808 623.104a25.6 25.6 0 0 0 12.8 3.584 25.6 25.6 0 0 0 12.8-3.584l171.008-98.56a25.6 25.6 0 0 0 0-44.544l-171.008-98.56a25.6 25.6 0 0 0-38.4 22.016v197.632a25.6 25.6 0 0 0 12.8 22.016z m38.4-175.104l94.208 54.272-94.208 54.272z" p-id="46596" fill="#9b9b9b"></path></svg>'
        },
        {
            title: 'HTML代码',
            id: 'wmd-html-button',
            svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M832 832V320l-192-192H256c-38.4 0-64 25.6-64 64v640c0 38.4 25.6 64 64 64h512c32 0 64-25.6 64-64zM614.4 192L768 352V832H256V192h358.4z" fill="#9b9b9b"></path><path d="M550.4 403.2c-12.8 0-25.6 6.4-32 19.2l-51.2 204.8c-6.4 12.8 6.4 25.6 19.2 32h6.4c12.8 0 19.2-6.4 25.6-19.2l51.2-204.8c6.4-12.8-6.4-25.6-19.2-32zM409.6 441.6c-6.4-12.8-25.6-12.8-38.4 0L300.8 512c-12.8 12.8-12.8 25.6 0 38.4l70.4 70.4c6.4 6.4 12.8 6.4 19.2 6.4 6.4 0 12.8 0 19.2-6.4 12.8-12.8 12.8-25.6 0-38.4l-51.2-51.2 51.2-51.2c12.8-12.8 12.8-32 0-38.4zM665.6 441.6c-12.8-12.8-25.6-12.8-38.4 0s-12.8 25.6 0 38.4l51.2 51.2-51.2 51.2c-12.8 12.8-12.8 25.6 0 38.4 6.4 6.4 12.8 6.4 19.2 6.4s12.8 0 19.2-6.4l70.4-70.4c12.8-12.8 12.8-25.6 0-38.4l-70.4-70.4z" p-id="36741" fill="#9b9b9b"></path></svg>'
        },
        {
            title: 'H1 ~ H6标题',
            id: 'wmd-title-button',
            svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M341.333333 213.333333v277.333334h341.333334V213.333333h85.333333v640h-85.333333v-277.333333H341.333333V853.333333H256V213.333333h85.333333z" p-id="100125" fill="#9b9b9b"></path></svg>'
        },
        {
            title: '表格',
            id: 'wmd-table-button',
            svg: '<svg class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M874.72537547 393.10577464c4.43786778 0 8.06319875-3.62677647 8.06319875-8.05886081v-60.45447064c0-4.43859053-3.62605372-8.06392149-8.06319876-8.06392078H709.48402455V149.26956386C709.48402455 144.8374795 705.85724808 141.21142578 701.42444026 141.21142578h-64.48317757c-4.43786778 0-8.06392149 3.62605372-8.06392151 8.05813807V316.52852241H399.15208921V149.26956386C399.15208921 144.8374795 395.5260355 141.21142578 391.08744497 141.21142578h-64.48317758c-4.43208435 0-8.05813807 3.62605372-8.05813879 8.05813807V316.52852241H149.26956386C144.8374795 316.52852241 141.21142578 320.15385266 141.21142578 324.59244319v60.45447064c0 4.43208435 3.62605372 8.05886081 8.05813807 8.05886081h169.27656475V630.89494811H149.26956386C144.8374795 630.89494811 141.21142578 634.52027908 141.21142578 638.95308617v60.45447064c0 4.4328071 3.62605372 8.06319875 8.05813807 8.06319803h169.27656475v167.25245238c0 4.43931328 3.62677647 8.06464426 8.05813879 8.06464425h64.48317759c4.43859053 0 8.06464426-3.62605372 8.06464424-8.06464425V707.47075483h229.72525196v167.25245239c0 4.43931328 3.62677647 8.06464426 8.06392151 8.06464425h64.48317757c4.4328071 0 8.05886081-3.62605372 8.05886155-8.06464425V707.47075483h165.24135091c4.43786778 0 8.06319875-3.63039093 8.06319875-8.06319802v-60.45447064c0-4.4328071-3.62605372-8.05813807-8.06319874-8.05813806H709.48402455V393.10577464h165.24135091zM628.87734118 630.89494811H399.15208921V393.10577464h229.72525197V630.89494811z m0 0" p-id="152923" fill="#9b9b9b"></path></svg>'
        },
        {
            title: '删除线',
            id: 'wmd-delete-button',
            svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M926.95196533 468.96875H566.87011719a1576.88964844 1576.88964844 0 0 0-29.77597047-5.65493774c-14.98645019-2.73312378-20.92318726-3.86114502-29.02615355-5.46707154-48.34259033-9.42379761-77.46514893-18.84759521-100.64849854-32.2281189-33.07351685-19.31643677-49.18798828-45.5171814-49.18798828-80.19415283 0-34.86978149 14.32397461-63.79870606 41.46405029-83.87072753 26.76187133-19.79104614 64.83444214-30.25469971 110.06652833-30.25469971 51.64178467 0 91.50897217 13.57498169 118.55099487 40.33602905 13.75872802 13.57003784 23.84417724 30.24975586 29.96960449 49.5670166 1.22360229 3.86526489 2.63589477 9.42379761 4.05395507 16.77694703 0.84622192 4.5236206 4.900177 7.72558594 9.32656861 7.72558593h68.60742188c5.2734375 0 9.51608276-4.33493042 9.51608276-9.51608276v-0.94345093c-0.65835571-6.40969849-1.22360229-11.40216065-1.88607788-15.07873535-6.87936401-40.99438477-26.38449097-76.99136352-56.25769043-103.94192505-41.84060669-38.16897583-103.37997437-58.24017334-177.82608033-58.24017335-68.13363648 0-129.48019409 17.05627442-172.73886108 47.96520997-24.12515258 17.3421936-42.78488159 38.82650757-55.22277832 63.79788208-12.72299195 25.53826904-19.12774658 55.03820801-19.12774659 87.54730225 0 27.80172729 5.36901855 51.3616333 16.30316163 72.09118652 7.81704712 14.79776001 18.46939087 27.80255127 32.13171387 39.58209228H97.66024781c-4.14541626 0-7.53607177 3.39065552-7.53607179 7.53689576v56.54196166c0 4.15036011 3.3914795 7.5418396 7.53607179 7.54183961h408.2415161c1.97836304 0.37738037 3.67163086 0.75476074 5.55853272 1.13214111 29.11761474 5.83868408 46.65014648 9.79623413 62.76379395 14.32397461 21.67300415 6.12460328 38.26126099 12.53018188 52.01916504 20.26071167 33.73764038 19.0362854 50.22949219 46.36422729 50.22949219 83.86990357 0 33.26385498-14.60906982 62.95166016-41.0907898 83.68203735-28.74105835 22.52416992-71.24414063 34.30371094-122.97903442 34.30371093-41.181427 0-76.04626465-8.01068115-103.8496399-23.55908203-27.42352295-15.3597107-46.27111817-37.50650024-56.26098632-65.49691773-0.7498169-2.0706482-1.60098266-4.900177-2.54525758-8.48034667-1.12719727-4.14541626-4.99163818-7.0680542-9.13705443-7.0680542H265.49975586c-5.27838135 0-9.51525879 4.33493042-9.51525879 9.52102662v0.93933105c0.18869018 2.16705323 0.37738037 3.96166992 0.56607056 5.3739624 6.12460328 45.98684693 28.55236816 83.68203735 66.62411499 111.9526062C367.55889893 834.13946533 430.03759766 851.47753906 503.9225769 851.47753906c79.34710693 0 145.87893677-18.65972901 192.43185425-53.99752807 23.55990601-17.80773925 41.65274048-39.76583862 53.80966187-65.02313232 12.24920654-25.53826904 18.56167602-54.56442261 18.56167602-86.22647096 0-29.96878052-5.46212768-55.03244018-16.77200317-76.71038818-5.46624756-10.55593872-12.3447876-20.26071167-20.54498291-29.02615356h195.5423584c4.15036011 0 7.54101562-3.3914795 7.54101562-7.53689576v-56.54278564c0.00082398-4.05395508-3.38983154-7.44543457-7.54019165-7.44543457z m0 0" p-id="78474" fill="#9b9b9b"></path></svg>'
        },
        {
            title: '代码段',
            id: 'wmd-snippet-button',
            svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 128a128 128 0 0 1 128 128v512a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V256a128 128 0 0 1 128-128h512z m0 64H256a64 64 0 0 0-63.84 59.2L192 256v512a64 64 0 0 0 59.2 63.84L256 832h512a64 64 0 0 0 63.84-59.2L832 768V256a64 64 0 0 0-59.2-63.84L768 192z m-205.92 136.064a32 32 0 0 1 21.344 36.8l-0.96 3.616-94.88 288a32 32 0 0 1-61.76-16.416l0.96-3.616 94.88-288a32 32 0 0 1 40.416-20.384z m-183.68 35.36a32 32 0 0 1 8.608 41.44l-2.24 3.36-77.28 103.04 77.312 103.04a32 32 0 0 1-3.36 42.24l-3.04 2.56a32 32 0 0 1-42.208-3.296l-2.592-3.072-91.712-122.24a32 32 0 0 1-2.304-34.88l2.304-3.52 91.712-122.24a32 32 0 0 1 44.8-6.4z m267.2 0a32 32 0 0 1 42.208 3.36l2.624 3.04 91.68 122.24 2.304 3.52a32 32 0 0 1 0 31.36l-2.304 3.52-91.68 122.24-2.624 3.104a32 32 0 0 1-38.816 5.536l-3.36-2.24-3.072-2.56a32 32 0 0 1-5.568-38.848l2.24-3.36 77.28-103.072-77.28-103.04-2.24-3.36a32 32 0 0 1 8.64-41.44z" p-id="86024" fill="#9b9b9b"></path></svg>'
        },
        {
            title: '行内代码',
            id: 'wmd-code-button',
            svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M342.677 595.002" p-id="91366" fill="#9b9b9b"></path><path d="M920.887 527.046l-206.45 206.45c-8.142 8.146-21.347 8.146-29.493 0l-29.493-29.493c-8.146-8.142-8.146-21.347 0-29.493l162.213-162.213L655.452 350.089c-8.146-8.146-8.146-21.351 0-29.497l29.493-29.493c8.146-8.146 21.351-8.146 29.493 0l206.45 206.45C929.038 505.695 929.038 518.9 920.887 527.046zM434.759 857.498l-37.643-10.54c-10.394-2.911-16.788-13.193-14.281-22.969l167.635-644.738c2.682-10.01 13.877-15.712 25.001-12.73l40.287 10.794c11.128 2.982 17.973 13.514 15.287 23.528L458.12 845.068C455.609 854.845 445.153 860.409 434.759 857.498zM368.545 704.003l-29.493 29.493c-8.142 8.146-21.347 8.146-29.493 0l-206.45-206.45c-8.146-8.146-8.146-21.351 0-29.497l206.45-206.45c8.146-8.146 21.351-8.146 29.493 0l29.493 29.493c8.146 8.146 8.146 21.351 0 29.497L206.332 512.297 368.545 674.51C376.691 682.656 376.691 695.861 368.545 704.003z" p-id="91367" fill="#9b9b9b"></path></svg>'
        },
        {
            title: '任务列表',
            id: 'wmd-task-button',
            svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M593.92 215.04c112.64 0 204.8 92.16 204.8 204.8v204.8c0 112.64-92.16 204.8-204.8 204.8h-204.8c-112.64 0-204.8-92.16-204.8-204.8v-204.8c0-112.64 92.16-204.8 204.8-204.8h204.8m0-51.2h-204.8c-143.36 0-256 112.64-256 256v204.8c0 143.36 112.64 256 256 256h204.8c143.36 0 256-112.64 256-256v-204.8c0-138.24-112.64-256-256-256z" fill="#9b9b9b" p-id="3001"></path><path d="M527.36 762.88L230.4 460.8 307.2 399.36l174.08 133.12c71.68-81.92 230.4-250.88 445.44-384l20.48 40.96c-199.68 184.32-363.52 445.44-419.84 573.44m0 0" fill="#9b9b9b" p-id="3002"></path></svg>'
        },
        {
            title: '默认卡片',
            id: 'wmd-card-button',
            svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M928.775 187.554H94.113c-15.364 0-27.822 12.49-27.822 27.895v585.79c0 15.405 12.458 27.895 27.822 27.895h834.662c15.363 0 27.821-12.49 27.821-27.895v-585.79c0-15.405-12.458-27.895-27.821-27.895z m-35.77 577.428H129.882V251.706h763.123v513.276z" p-id="8891" fill="#9b9b9b"></path><path d="M808.546 380.025H214.352c-11.532 0-20.865 9.37-20.865 20.922v22.323c0 11.55 9.333 20.922 20.865 20.922h594.194c11.522 0 20.867-9.372 20.867-20.922v-22.323c-0.001-11.55-9.345-20.922-20.867-20.922zM363.38 636.662H214.352c-11.532 0-20.865 9.356-20.865 20.92v22.312c0 11.564 9.333 20.921 20.865 20.921H363.38c11.534 0 20.866-9.358 20.866-20.921v-22.311c0-11.565-9.332-20.92-20.866-20.92z" p-id="8892" fill="#9b9b9b"></path></svg>'
        },
        {
            title: '消息提示',
            id: 'wmd-message-button',
            svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M669.1328 281.6a307.456 307.456 0 0 0-428.0832 0 295.68 295.68 0 0 0 31.744 445.44v27.0848a29.6448 29.6448 0 0 0 59.2896 0v-40.3968a30.72 30.72 0 0 0-1.0752-7.5264 30.1568 30.1568 0 0 0-12.4416-18.8928 236.4928 236.4928 0 0 1-104.3456-196.4032c0-130.56 110.7456-236.8 241.3056-236.8s241.3056 106.24 241.3056 236.8c0 6.1952 0 12.6464-0.6656 19.0976a235.52 235.52 0 0 1-104.96 178.176 30.3616 30.3616 0 0 0-12.6464 32.2048v33.9456a29.6448 29.6448 0 0 0 59.2896 0v-26.8288a299.2128 299.2128 0 0 0 76.1856-84.8384 291.2768 291.2768 0 0 0 40.96-128c0.6656-7.936 0.8704-15.872 0.8704-23.808A295.1168 295.1168 0 0 0 669.1328 281.6zM513.4848 880.3328l-118.9376 0.8704a29.7472 29.7472 0 1 0 0.6144 59.4432l118.9376-0.8704a29.7472 29.7472 0 1 0-0.6144-59.4432zM603.4432 804.352H305.2032a29.6448 29.6448 0 0 0 0 59.2384h298.24a29.6448 29.6448 0 0 0 0-59.2384z" fill="#666666" p-id="36814"></path><path d="M485.3248 342.1184A29.5424 29.5424 0 0 0 455.68 312.32a178.688 178.688 0 0 0-178.3808 178.5856 29.6448 29.6448 0 0 0 59.2896 0A118.9376 118.9376 0 0 1 455.68 371.968a29.7472 29.7472 0 0 0 29.6448-29.8496z" fill="#9b9b9b" p-id="36815"></path></svg>'
        },
        {
            title: '居中标题',
            id: 'wmd-mtitle-button',
            svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M921.6 460.8h-266.24c-20.48-61.44-76.8-102.4-143.36-102.4s-122.88 40.96-143.36 102.4H102.4c-30.72 0-51.2 20.48-51.2 51.2s20.48 51.2 51.2 51.2h266.24c20.48 61.44 76.8 102.4 143.36 102.4s122.88-40.96 143.36-102.4H921.6c30.72 0 51.2-20.48 51.2-51.2s-20.48-51.2-51.2-51.2z m-409.6 102.4c-30.72 0-51.2-20.48-51.2-51.2s20.48-51.2 51.2-51.2 51.2 20.48 51.2 51.2-20.48 51.2-51.2 51.2z" fill="#9b9b9b" p-id="11537"></path></svg>'
        },
        {
            title: '便条按钮',
            id: 'wmd-anote-button',
            svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M910.222222 227.555556a113.777778 113.777778 0 0 1 113.777778 113.777777v341.333334a113.777778 113.777778 0 0 1-113.777778 113.777777H113.777778a113.777778 113.777778 0 0 1-113.777778-113.777777V341.333333a113.777778 113.777778 0 0 1 113.777778-113.777777h796.444444z m0 56.888888H113.777778a56.888889 56.888889 0 0 0-56.888889 56.888889v341.333334a56.888889 56.888889 0 0 0 56.888889 56.888889h796.444444a56.888889 56.888889 0 0 0 56.888889-56.888889V341.333333a56.888889 56.888889 0 0 0-56.888889-56.888889zM282.225778 369.891556c25.486222 0 45.937778 5.831111 61.326222 17.521777 15.388444 11.662222 23.096889 29.326222 23.096889 52.963556 0 14.336-3.527111 26.624-10.552889 36.835555-7.025778 10.24-17.066667 18.119111-30.065778 23.694223v0.796444c17.521778 3.697778 30.805333 12.003556 39.822222 24.888889 9.016889 12.885333 13.539556 29.013333 13.539556 48.384 0 11.150222-1.991111 21.560889-5.973333 31.260444-3.982222 9.671111-10.24 18.062222-18.716445 25.088-8.504889 7.025778-19.370667 12.600889-32.654222 16.725334-13.283556 4.124444-29.070222 6.172444-47.388444 6.172444H144.042667v-284.330666h138.183111z m345.258666 0v43.008h-90.396444V654.222222h-49.777778v-241.322666h-89.998222v-43.008h230.172444z m83.626667 0l129.820445 209.464888h0.796444v-209.464888h47.388444V654.222222H836.551111l-129.422222-209.066666h-1.194667V654.222222h-47.388444v-284.330666H711.111111zM281.827556 524.8H193.820444v88.803556h88.007112c15.132444 0 26.88-3.925333 35.242666-11.747556 8.362667-7.822222 12.544-18.915556 12.544-33.251556 0-14.08-4.181333-24.888889-12.544-32.455111-8.362667-7.566222-20.110222-11.349333-35.242666-11.349333z m-6.769778-114.289778H193.820444v78.449778H275.057778c11.946667 0 21.902222-3.384889 29.866666-10.154667s11.946667-16.526222 11.946667-29.269333c0-14.336-3.584-24.433778-10.752-30.264889-7.168-5.831111-17.521778-8.760889-31.061333-8.760889z" p-id="13843" fill="#9b9b9b"></path></svg>'
        },
        {
            title: '多彩按钮',
            id: 'wmd-abtn-button',
            svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M360 651c-74.1 0-134.3-60.3-134.3-134.3 0-74.1 60.3-134.3 134.3-134.3s134.3 60.3 134.3 134.3c0 74-60.2 134.3-134.3 134.3z m0-204.6c-38.8 0-70.3 31.5-70.3 70.3S321.2 587 360 587s70.3-31.5 70.3-70.3-31.5-70.3-70.3-70.3z" p-id="5116" fill="#9b9b9b"></path><path d="M666.9 778.9H360c-70 0-135.9-27.3-185.4-76.8S97.8 586.7 97.8 516.7s27.3-135.9 76.8-185.4S290 254.5 360 254.5h306.9c70 0 135.9 27.3 185.4 76.8s76.8 115.4 76.8 185.4-27.3 135.9-76.8 185.4-115.3 76.8-185.4 76.8zM360 318.5c-109.3 0-198.2 88.9-198.2 198.2S250.7 714.9 360 714.9h306.9c109.3 0 198.2-88.9 198.2-198.2s-88.9-198.2-198.2-198.2H360z" p-id="5117" fill="#9b9b9b"></path></svg>'
        },
        {
            title: '点击复制',
            id: 'wmd-copy-button',
            svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M817.521 690.221h-50.921v-356.441c0-40.735-35.644-76.38-76.38-76.38h-356.441v-50.921h356.441c71.289 0 127.3 56.012 127.3 127.3v356.441z" p-id="2048" fill="#9b9b9b"></path><path d="M639.3 817.521h-356.441c-40.735 0-76.38-35.644-76.38-76.38v-356.441c0-40.735 35.644-76.38 76.38-76.38h356.441c40.735 0 76.38 35.644 76.38 76.38v356.441c0 40.735-35.644 76.38-76.38 76.38zM282.859 359.241c-15.277 0-25.461 10.185-25.461 25.46v356.441c0 15.277 10.185 25.461 25.461 25.461h356.441c15.277 0 25.46-10.185 25.46-25.461v-356.441c0-15.277-10.185-25.46-25.46-25.46h-356.441z" p-id="2049" fill="#9b9b9b"></path></svg>'
        }
    ];

    /* 用于设置插入到文章的短代码内容 */
    function getInsertTextById(id) {
        let str = '';
        switch (id) {
            case 'wmd-hide-button':
                str = `\n\n{hide}${$('#text').selectionRange() ? $('#text').selectionRange() : '回复可见'}{/hide}\n\n`;
                break;
            case 'wmd-mlist-button':
                str = `\n\n{music-list id="网易云歌单ID" /}\n\n`;
                break;
            case 'wmd-music-button':
                str = `\n\n{music id="网易云音乐ID" /}\n\n`;
                break;
            case 'wmd-bili-button':
                str = `\n\n{bilibili bvid="哔哩哔哩的Bvid" /}\n\n`;
                break;
            case 'wmd-dplayer-button':
                str = `\n\n{dplayer src="M3U8或MP4地址" /}\n\n`;
                break;
            case 'wmd-html-button':
                str = `\n\n!!!\n<span class="test">Hello Joe</span>\n<style>\n  .test { color: #ff6800 }\n</style>\n!!!\n\n`;
                break;
            case 'wmd-title-button':
                str = `\n\n# 一级标题\n## 二级标题\n### 三级标题\n#### 四级标题\n##### 五级标题\n###### 六级标题\n\n`;
                break;
            case 'wmd-table-button':
                str = `\n\n| 左对齐 | 右对齐 | 居中对齐 |\n| :-----| ----: | :----: |\n| 单元格 | 单元格 | 单元格 |\n\n`;
                break;
            case 'wmd-delete-button':
                str = `~~${$('#text').selectionRange() ? $('#text').selectionRange() : '删除线'}~~`;
                break;
            case 'wmd-snippet-button':
                str = `\n\n\`\`\`php\necho 'Hello Joe';\n\`\`\`\n\n`;
                break;
            case 'wmd-code-button':
                str = ` \`${$('#text').selectionRange() ? $('#text').selectionRange() : '行内代码'}\` `;
                break;
            case 'wmd-task-button':
                str = `{x} 任务已完成\n{ } 任务未完成`;
                break;
            case 'wmd-card-button':
                str = `\n\n{card-default width="100%" label="卡片标题"}${$('#text').selectionRange() ? $('#text').selectionRange() : '卡片内容'}{/card-default}\n\n`;
                break;
            case 'wmd-message-button':
                str = `\n\n{message type="success|info|warning|error"}${$('#text').selectionRange() ? $('#text').selectionRange() : '提示内容'}{/message}\n\n`;
                break;
            case 'wmd-mtitle-button':
                str = `\n\n{mtitle}${$('#text').selectionRange() ? $('#text').selectionRange() : '居中标题'}{/mtitle}\n\n`;
                break;
            case 'wmd-anote-button':
                str = `{anote icon="Font Awesome图标" href="跳转地址" type="secondary|success|warning|error|info"}${$('#text').selectionRange() ? $('#text').selectionRange() : '便条按钮'}{/anote}`;
                break;
            case 'wmd-abtn-button':
                str = `{abtn icon="Font Awesome图标" color="颜色值" href="跳转地址" radius="圆角（半圆17.5px）"}${$('#text').selectionRange() ? $('#text').selectionRange() : '多彩按钮'}{/abtn}`;
                break;
            case 'wmd-copy-button':
                str = `{copy text="文本文本"}${$('#text').selectionRange() ? $('#text').selectionRange() : '点击复制'}{/copy}`;
                break;
        }
        return str;
    }
    /* 此处无需修改 */
    items.forEach(_ => {
        let item = $(`<li class="wmd-button" id="${_.id}" title="${_.title}">${_.svg}</li>`);
        item.on('mousedown', () => $('#text').insertContent(getInsertTextById(_.id)));
        $('#wmd-button-row').append(item);
    });
    $.ajax({
        url: 'https://cdn.jsdelivr.net/gh/HaoOuBa/Joe@master/assets/json/joe.owo.json',
        success(res) {
            let barStr = '';
            let scrollStr = '';
            for (let key in res) {
                barStr += `<div class="item" data-index="${res[key].index}">${key}</div>`;
                scrollStr += `
                    <ul class="scroll" data-index="${res[key].index}">
                        ${res[key].container.map(_ => `<li class="item" data-text="${_.data}">${_.icon}</li>`).join('')} 
                    </ul>
                `;
            }
            $('#wmd-button-row').append(`
                <li class="wmd-button joe_owo__contain" title="插入表情">
                    <div class="seat">
                        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 160c194.4 0 352 157.6 352 352s-157.6 352-352 352S160 706.4 160 512 317.6 160 512 160z m0 64a288 288 0 1 0 0 576 288 288 0 0 0 0-576z m122.08 326.624l61.024 19.264a191.488 191.488 0 0 1-28.736 56.288A191.744 191.744 0 0 1 512 704a191.744 191.744 0 0 1-179.648-124.096l-3.456-10.016 61.024-19.264c4.256 13.44 10.72 26.112 19.136 37.44A127.744 127.744 0 0 0 512 640a127.744 127.744 0 0 0 119.264-81.408l2.816-8zM400 352a48 48 0 1 1 0 96 48 48 0 0 1 0-96z m224 0a48 48 0 1 1 0 96 48 48 0 0 1 0-96z" p-id="2401" fill="#9b9b9b"></path></svg>
                    </div>
                    <div class="box">
                        ${scrollStr}
                        <div class="bar">${barStr}</div>
                    </div>
                </li>
            `);
            $(document).on('click', function () {
                $('.joe_owo__contain .box').removeClass('show');
            });
            $('.joe_owo__contain .seat').on('click', function (e) {
                e.stopPropagation();
                $(this).siblings('.box').toggleClass('show');
            });
            $('.joe_owo__contain .box .bar .item').on('click', function (e) {
                e.stopPropagation();
                $(this).addClass('active').siblings().removeClass('active');
                const scrollIndx = '.joe_owo__contain .box .scroll[data-index="' + $(this).attr('data-index') + '"]';
                $(scrollIndx).show().siblings('.scroll').hide();
            });
            /* 点击表情，向文本框插入内容 */
            $('.joe_owo__contain .scroll .item').on('click', function () {
                const text = $(this).attr('data-text');
                $('#text').insertContent(text);
            });
            /* 默认激活第一个 */
            $('.joe_owo__contain .box .bar .item').first().click();
        }
    });
});

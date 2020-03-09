<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <!-- Js -->
  <script type="text/javascript" src="js/jquery.js"></script>
  <script type="text/javascript" src="js/echarts.min.js"></script>
  <script type="text/javascript" src="js/echarts-liquidfill.min.js"></script>
  <script type="text/javascript" src="js/echarts-wordcloud.min.js"></script>  
  <script type="text/javascript" src="js/superAPI-2.6.0-owell.min.js"></script>
 
  <script language="Javascript" src="js/uiduck.js"></script>
  <script language="Javascript" src="js/json2.js"></script>
  <!-- Styles -->
  <link href="{{ mix('css/app.css') }}" rel="stylesheet">

  <link rel="stylesheet" href="./css/ai.css">
  <link href="css/uiduck.css" type="text/css" rel="stylesheet">
  <link href="css/table.css" type="text/css" rel="stylesheet">


  @yield('styles')

</head>

<body >


 <div class="container-fulid" >

  <canvas id="canvas"></canvas> 

<!-----HEADER END-----> 
<!--用来解决视频右键菜单，用于视频上面的遮罩层 START-->
<div class="videozz"></div>
    @include('layouts._header')

    

   
    @yield('content')
   

    @include('layouts._footer')
</div>




  <!-- Scripts -->
  <script src="{{ mix('js/app.js') }}"></script>
  <script src="http://www.jq22.com/jquery/jquery-1.10.2.js"></script>
  <script type="text/javascript" src="js/js.js"></script>
  <!-- <script type="text/javascript" src="js/51vr.js"></script> -->
  <script type="text/javascript" src="js/let.js"></script>

  <script src="js/ai.js"></script>




  <script src="js/bg.js" type="text/javascript"></script>
  <script type="text/javascript" src="js/charts/show.js"></script>
  <script type="text/javascript" src="js/charts/guangqiang.js"></script>
  <script type="text/javascript" src="js/charts/kongqi.js"></script>
  <script type="text/javascript" src="js/charts/shushi.js"></script>
  <script type="text/javascript" src="js/charts/szyy.js"></script>
  <script type="text/javascript" src="js/charts/kangyi.js"></script>

  @yield('scripts')

</body>

</html>

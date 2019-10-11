<nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-static-top">

    <!-- Branding Image -->
    <a class="navbar-brand " href="{{ url('/') }}">
      {{-- <img alt="Brand" src="..."> --}}
      &nbsp;&nbsp;OWELL
    </a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Left Side Of Navbar -->

      <ul class="navbar-nav navbar-left mr-auto">
        <!-- Authentication Links -->
        @guest
          <li class="nav-item"><a class="nav-link" href="">&nbsp;健康办公可视化平台</a></li>

          @else
            <li class="nav-item">
              <a class="nav-link mt-1 mr-3 font-weight-bold" href="{{ route('topics.create') }}">
                <i class="fa fa-plus"></i>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="{{ Auth::user()->avatar }}"  class="img-responsive img-circle" width="30px" height="30px">
                {{ Auth::user()->name }}
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="{{ route('users.show', Auth::id()) }}">
                    <i class="far fa-user mr-2"></i>
                    个人中心
                </a>
                <a class="dropdown-item" href="{{ route('users.edit', Auth::id()) }}">
                  <i class="far fa-edit mr-2"></i>
                  编辑资料
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" id="logout" href="#">
                  <form action="{{ route('logout') }}" method="POST" onsubmit="return confirm('您确定要退出吗？');">
                    
                    {{ csrf_field() }}
                    <button class="btn btn-block btn-danger" type="submit" name="button">退出</button>
                  </form>
                </a>
              </div>
            </li>
        @endguest
      </ul>

      <!-- Right Side Of Navbar -->
      <ul class="navbar-nav navbar-right ">
          <li class="nav-item "><a class="nav-link" href=""><i class="fa fa-thermometer-half"></i>&nbsp;空气</a></li>
          <li class="nav-item "><a class="nav-link" href=""><i class="fa fa-tint" aria-hidden="true"></i>&nbsp;水质</a></li>
          <li class="nav-item "><a class="nav-link" href=""><i class="fa fa-child"></i>&nbsp;舒适</a></li>
          <li class="nav-item "><a class="nav-link" href=""><i class="fa fa-sun" aria-hidden="true"></i>&nbsp;光强</a></li>
          <li class="nav-item "><a class="nav-link" href=""><i class="fa fa-futbol"></i>&nbsp;健身</a></li>
          <li class="nav-item "><a class="nav-link" href=""><i class="fa fa-fire" aria-hidden="true"></i>&nbsp;消防</a></li>
          <li class="nav-item "><a class="nav-link" href=""><i class="fa fa-camera" aria-hidden="true"></i>&nbsp;安防</a></li>
        </ul>
    </div>

</nav>
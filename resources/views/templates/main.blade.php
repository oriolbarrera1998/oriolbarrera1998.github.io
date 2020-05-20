<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
        <meta charset="utf-8">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <!-- <script src="{{ asset('js/jquery-3.3.1.min.js') }}"></script> -->
        <script src="{{ asset('js/popper.min.js') }}"></script>
        <script src="{{ asset('js/bootstrap.min.js') }}"></script>

        <link href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link type="text/css" rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}"/>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>
        <title>@yield('titulo')</title>
    </head>
    <body>
        @yield('body')

        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script src="{{ asset('js/ScrollMagic.min.js') }}" type="text/javascript"></script>
        <script src="{{ asset('js/sidebar.js') }}" type="text/javascript"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.11/vue.js"></script>

        <script>
            AOS.init();
        </script>
        <script type="text/javascript" src="{{ asset('js/index.js') }}"></script>
        <script src="{{asset('js/app.js')}}"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.ui.min.js"></script>
    </body>
</html>

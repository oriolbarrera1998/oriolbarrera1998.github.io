@extends ('templates.main')

@section('body')
    <div id="app">
        
        <main class="main">
        <sidebar></sidebar>
        <router-view></router-view>
        </main>
    </div>
@endsection

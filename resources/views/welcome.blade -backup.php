<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    <body>
                    <div id='app'>
                    <link href="https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css" rel="stylesheet">
                        <app-component></app-component>
                    </div>
        <script src={{ asset('js/app.js') }}></script>
    </body>
</html>

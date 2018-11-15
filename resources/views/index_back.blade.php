<!DOCTYPE html>
<html>
<head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet" href="css/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>PuntoRent</title>
</head>
<body>
@include('layouts.nav')
<main>
    <br>
    <div class="container row">
        <div class="col s12">
            <div class="card-panel">
                <form>
                    <h6 class="center">Arrendar Vehículo</h6>
                    <div class="row">
                        <div class="input-field col s12 l6">
                            <select>
                                <option value="1">Isidora Goyenechea 2897, Local 4 - Subterráneo, Las Condes</option>
                            </select>
                            <label>Sucursal</label>
                        </div>
                            <input type="text" class="datepicker">
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="carousel carousel-slider">
        <a class="carousel-item" href="#one!"><img src="img/mg3.png"></a>
        <a class="carousel-item" href="#two!"><img src="img/mg-gt.png"></a>
        <a class="carousel-item" href="#three!"><img src="img/np-300.png"></a>
    </div>
</main>
@include('layouts.footer')
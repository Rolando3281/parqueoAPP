<template>
    <div class="container">
         <br>
            <div class="card">
                <div class="card-header">
                    <center><b>INGRESO DE VEHICULO</b></center>
                </div>

                 <img alt="Vue logo" src="../assets/logo-bm.png">
                <div class="card-body">

                    <form v-on:submit.prevent="ingresarVehiculo">
                        <div class="form-group">
                          <label for="placa">PLACA:</label>
                          <input type="text"
                            class="form-control" required name="placa" id="placa" v-model="estancia.placa" aria-describedby="helpId" placeholder="NUMERO DE PLACA">
                          <small id="helpId" class="form-text text-muted">Ingrese numero de placa</small>
                        </div>

                        <div class="btn-group" role="group" aria-label="">
                            <button type="submit" class="btn btn-success">INGRESAR</button>
                            

                            <router-link :to="{name:'Listar'}" class="btn btn-danger">CANCELAR</router-link>
                            
                        </div>

                    </form>
                    
                </div>
                <div class="card-footer text-muted">
                    PARQUEO BLUE MEDICAL TORRE 1
                </div>
            </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            estancia:{}
        }
    },

    methods:{
        ingresarVehiculo(){

            var fecha = new Date();
            var time = fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();
            var fechaFormato = fecha.getFullYear() + "-" + (fecha.getMonth()+1) + "-" + fecha.getDate() + " "+time;
            console.log(this.estancia);
            console.log(fechaFormato);

            var datosEnviar = {
                                placa:this.estancia.placa,
                                }

                                console.log("SE ENVIA: " + JSON.stringify(datosEnviar));

            fetch('http://localhost:8000/api/estancias',{
                method:"POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(datosEnviar)
            })
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta=>{
                console.log(datosRespuesta);
                window.location.href='listar'
            }))
        }
    }
}
</script>
var chiave;
var alfabeto = "abcdefghijklmnopqrstuvwxyz";
var ParolaCriptata="";
var ParolaDeCriptata="";

function Cripta()
{
    //la parola inserita in input
    var Parola=document.FormDati.Parola.value;

    //la parola inserita in input
    chiave=document.FormDati.Chiave.value*1;

    for(var i=0;i<Parola.length;i++)
    {
        if (Parola[i] >= 'a' & Parola[i] <= 'z') {
            //trova la posizione della lettera nell'alfabeto
	        var pos = alfabeto.indexOf(Parola[i]);
            pos=pos+chiave;

            if(pos>25){
               var scarto=pos-26;
               pos=0;
               pos+=scarto;
            }

            ParolaCriptata+=alfabeto[pos];
        }
    }
    document.getElementById("risCriptazione").innerHTML = ParolaCriptata;
}

function DeCripta()
{
    for(var i=0;i<ParolaCriptata.length;i++)
    {
        if (ParolaCriptata[i] >= 'a' & ParolaCriptata[i] <= 'z') {
            //trova la posizione della lettera nell'alfabeto
	        var pos = alfabeto.indexOf(ParolaCriptata[i]);
            pos=pos-chiave;

            if(pos<0)
               pos+=26;

            ParolaDeCriptata+=alfabeto[pos];
        }
    }
    document.getElementById("risDeCriptazione").innerHTML = ParolaDeCriptata;

}

function Pulisci()
{
    ParolaCriptata="";
    ParolaDeCriptata="";
    document.getElementById("risCriptazione").innerHTML = "Messaggio Criptato";
    document.getElementById("risDeCriptazione").innerHTML = "Messaggio DeCriptato";
    document.getElementById("FormDati").reset();
}
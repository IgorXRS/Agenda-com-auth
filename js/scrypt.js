
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDYfY9VDXUesvt69QbAcZQqR7XNG_HAKVw",
    authDomain: "agenda-com-auth.firebaseapp.com",
    projectId: "agenda-com-auth",
    storageBucket: "agenda-com-auth.appspot.com",
    messagingSenderId: "270222464685",
    appId: "1:270222464685:web:e03659575f88de647b1824"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Começamos aqui

var usuario = null;

var formLogin = document.querySelector('form.login-form');
var btnLogout = document.querySelector('.logout');
    
formLogin.addEventListener('submit',(e)=>{
e.preventDefault();
    let email = document.querySelector('[name=email]').value;
    let password = document.querySelector('[name=password]').value;
    //alert(email);
    //alert(password);
        
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        usuario = userCredential.user;
            
        //alert('Logado com sucesso! '+usuario.email);
        document.querySelector('.login, .background-login').style.display = "none";
        document.querySelector('.container-login').style.display = "block";
        document.querySelector('.background-logado').style.display = "flex";

        formLogin.reset();
        
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });
    });

const db = firebase.firestore();

firebase.auth().onAuthStateChanged((val)=>{

if(val){
    usuario=val;
    //alert('Bem-vindo de volta '+ usuario.email);

    document.querySelector('.login, .background-login').style.display = "none";
    document.querySelector('.container-login').style.display = "block";
    document.querySelector('.background-logado').style.display = "flex";

    //Ouvir por mudanças no banco de dados.

    db.collection('tarefas').where("userId","==", usuario.uid).onSnapshot((data)=>{
        let list = document.querySelector('#tarefas');
        list.innerHTML = "";
        let tarefas = data.docs;
        tarefas = tarefas.sort(function(a,b){
            if(a.data().horario < b.data().horario)
                return -1;
            else
                return +1;
            })
        tarefas.map((val)=>{
            const horarioFormatado = new Date(val.data().horario).toLocaleString();

            list.innerHTML+=`<li>${val.data().tarefa} - ${horarioFormatado} <a tarefa-id="${val.id}" class="excluir-btn" href="javascript:void(0)"><i class="bi bi-trash"></i></a></li>`
        })

        var excluirTarefas = document.querySelectorAll('.excluir-btn');

        excluirTarefas.forEach(element => {
            element.addEventListener('click',function(e){
                e.preventDefault();
                let docId = element.getAttribute('tarefa-id');

                db.collection('tarefas').doc(docId).delete();
            })
        });
    })
}
})




btnLogout.addEventListener('click',(e)=>{
e.preventDefault();

    firebase.auth().signOut().then(() => {
        usuario = null;
        document.querySelector('.login').style.display = "block";
        document.querySelector('.background-login').style.display = "Flex";
        document.querySelector('.container-login, .background-logado').style.display = "none";
            
       //alert('Deslogado');
    }).catch((error) => {
        // An error happened.
    });
})



var formCadastro = document.querySelector('.form-cadastro-tarefa');



formCadastro.addEventListener('submit',(e)=>{
    e.preventDefault();
   
   let tarefa = document.querySelector('.form-cadastro-tarefa [name=tarefa]').value;
   let dateTime = document.querySelector('.form-cadastro-tarefa [name=datetime]').value;

   //Inserir e criar coleção caso não existe.

   let dataAtual = new Date().getTime();
   if(dataAtual > new Date(dateTime).getTime()){
    alert('Você informou uma data no passado...')
   }else if(tarefa == "" || dateTime == ""){
        alert('Você não pode deixar os campos vázios...')
   }else{
        db.collection('tarefas').add({
            tarefa: tarefa,
            horario: new Date(dateTime).getTime(),
            userId: usuario.uid
        })
        formCadastro.reset();
        alert('Sua tarefa foi cadastrada com sucesso!')
   }
})

  
     
       
        function logar(){
            var login = document.getElementById('login').value;
            var senha = document.getElementById('senha').value;
        
            if(login == "carmen" && senha =="123456"){
                alert('Sucesso');
                location.href = "index.html";
            }else{
                alert('Usuário ou senha errado');
            }
        }
        

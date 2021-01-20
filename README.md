# Api de envio de emails utilizando o Gmail

O sistema se utiliza de uma Queue que porcessa o envio de emails e utiliza-se do Redis para armazenamento dos dados da fila

Para que o email seja enviado deve se seguir o Json modelo abaixo:

```json
{
    "nomeRemetente":" ",
    "emailFrom":" ",
    "emailTo":" ",
    "subject":" ",
    "mensagem":" "
}

```



As configurações de variavel ambiente devem ser colocadas dentro da pasta "config"

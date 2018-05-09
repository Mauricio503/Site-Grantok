<?php 
// Armazenamos todo conteudo do documento numa variavel
$documento = ...;

// Gerando o hash do documento
$hash = '"' . md5($documento) . '"';

// Se o navegador possui um hash valido: informar que o documento nao mudou
if (array_key_exists('HTTP_IF_NONE_MATCH', $_SERVER) && $_SERVER['HTTP_IF_NONE_MATCH'] == $hash) {
    header('HTTP/1.1 304 Not Modified');
    header('Date: ' . gmstrftime('%a, %d %b %Y %T %Z', $_SERVER['REQUEST_TIME']));
    header('Cache-Control: ');
    header('Pragma: ');
    header('Expires: ');
    exit(0);
}

// Enviando o cabecalho HTTP
header('Content-Type: text/html; charset=UTF-8');
header('ETag: ' . $hash);

// Enviando o documento
echo $documento;
exit(0);
>

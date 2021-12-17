### La password se validará con una serie de reglas que pueden sumar o restar puntos.
### Reglas
- 1. Cantidad de caracteres: cada caracter(mayúscula, minúscula, número o símbolo) suma 4 puntos.
-- Simbolos: !"#$%&/()=?¡

- 2. Cantidad de mayúsculas: Por cada letra mayúscula sumar contabilizando como (longitud de caracteres - cantidad de letras mayúsculas) y este número multiplicarlo por 2. Condición para contabilizar: Haya números o símbolos o letras minúsculas también. (Ej.: AEIo es igual a 2, Mq1976+- es igual a 14, lAlAlAlA es igual a 8)

- 3. Solo Números = Si es solo números restar 1 punto por cada uno. (Ej.: 12 es igual a -2, si es a1 es igual a 0).

- 4. Números consecutivos = Buscar la cadena más larga de números consecutivos: Por cada número restar 2 puntos. (Ej.: 112a11 es igual a -6, a12a11 es igual a -4, a1b2ab3d4 es igual a 0, lalala es igual a 0)

### Umbrales parciales: Si es mayor o igual a 40 es excelente, si esta entre 20 y 29 es buena, menor a 20 es débil
- E5t3b4n deberia ser excelente => 7*4 + 6*2 + 0 + 0 = 40
- belen1234 deberia ser buena => 9*4 + 0 + 0 - 4*2 = 28
- lol123 deberia ser debil => 6*4 + 0 + 0 - 3*2 = 18

### Reglas adicionales

- 5. Cantidad de números: Números = Por cada número sumar de a 4 puntos. Condición para contabilizar: Haya simbolos o letras tambien. Exp: +(n*4) (Ej.: 4444 es igual a 0, lalala es igual a 0, 4444abc es igual a 16).
- 6. Letras Minúsculas consecutivas = Por cada letra minuscula consecutiva resta multiplicado por 2. (Ej.: lalala es igual a -10, d es igual a 0, dd es igual a -2, ddd es igual a -4)

### Umbrales: Si es mayor o igual a 50 es excelente, si esta entre 30 y 49 es buena, menor a 30 es débil
- E5t3b4n deberia ser excelente => 7*4 + 6*2 + 0 + 0 + 3*4 + 0 = 52
- belen1234 deberia ser buena => 9*4 + 0 + 0 - 4*2 + 4*4 - 4*2 = 36
- lol123 deberia ser debil => 6*4 + 0 + 0 - 6 + 3*4 - 2*2 = 26

### Una SPA con framework Javascript a elección que consuma o bien un servicio Rest o que llame a la función desarrollada en el punto anterior
- Una pantalla con un campo de ingreso de password, al ingresar caracteres valida la complejidad de la contraseña, y muestra un semáforo acorde, si no hay caracteres ingresados no muestra semáforo

### Teórico: ¿Cómo implementarías un servicio Rest que use el calculador de complejidad?

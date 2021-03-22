---
title: "Pablo Rueda Test"
author: "Pablo Rueda"
date: "21/03/2021"
---

# Pablo Rueda Test

## Introduccion
Test de Pablo Rueda para la prueba de Netberry Solutions. Para probar la solución en vivo, ver carpeta **Build**.

Utilizo React para la replica debido a mi experiencia con el framework. Me permite mantener los componetes separados en subsecciones para mantener el código más limpio. 

He utilizado el preprocesador SASS para el diseño. NO he utilizado terceras librerías de CSS o JS (e.g. Boostrap, tailwind, Material UI), como parte de la prueba.  He tratado de reducir también el uso de estilo dentro de los componentes que permite React; solo lo utilicé para el exportador de imagenes, puesto que así queda un componente reutilizable más limpio.

Los enlaces del proyecto no están vinculados a ninguna parte.

Finalmente, he incorporado algunas animaciones para el menu de barras, las tarjetas y el carrusel.

## Estructura de Componentes:
La página recibe los compoenentes con la siguiente estructura:

--      App  
----        Componentes:  
-------         Button: botones  
-------         Card: Tarjetas  
-------         Carrousel: Carrusel  
-------         Images: Control de imagenes  
-------         Layout: encabezado y pie de pagina  
----        Secciones: 
-------         CardsSection: seccion inicial de tarjetas  
-------         CarrouselSection: Seccion de carrusel  
-------         InfoSection: seccion de información 

## Estructura de scss:
La maquetación está compliada con scss. La estructura de los archivos de css es la siguiente:


--      main  
----        abstract  
-------         mixins: Media Querys  
-------         reset: reinicio de css  
-------         variables: fuente y color  
----        components:   
-------         behaviourals: componentes genéricos (e.g. container)  
-------         button   
-------         card    
-------         carrousel   
-------         info    
-------         layout   
-------         line: linea divisora bajo titulo de sección    






main(x,v,i,h)char**v;{h=atoi(v[1]);for(i=h*h;i--;)printf(i%h+i/h>=h?" ":i%h<1?"#\n":"#");}
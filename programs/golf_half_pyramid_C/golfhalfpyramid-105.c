main(x,v,r,c,h)char**v;{h=atoi(v[1]);for(r=0;r<h;++r){for(c=0;c<h;++c)printf(r+c+2>h?"#":" ");puts("");}}
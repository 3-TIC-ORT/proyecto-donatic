let BotonVolver = document.getElementById("BotonVolver");
function VolverAlInicio (){
    window.location.href='../Pantalla de inicio estudiantes/Inicio estudiantes.html'
}
BotonVolver.addEventListener("click", (VolverAlInicio));

const a = document.getElementById('i1');
const b = document.getElementById('i2');
const c = document.getElementById('i3');
const d = document.getElementById('i4');
const e = document.getElementById('i5');
const f = document.getElementById('i6');
const g = document.getElementById('i7');
const h = document.getElementById('i8');

const i = document.getElementById('d1');
const j = document.getElementById('d2');
const k = document.getElementById('d3');
const l = document.getElementById('d4');
const m = document.getElementById('d5');
const n = document.getElementById('d6');
const o = document.getElementById('d7');
const p = document.getElementById('d8');

const circuloI = document.getElementById('circuloI');
const circuloD = document.getElementById('circuloD');

const linea1 = document.getElementById('linea1');
const linea2 = document.getElementById('linea2');
const linea3 = document.getElementById('linea3');
const linea4 = document.getElementById('linea4');
const linea5 = document.getElementById('linea5');
const linea6 = document.getElementById('linea6');
const linea7 = document.getElementById('linea7');
const linea8 = document.getElementById('linea8');

const linea9 = document.getElementById('linea9');
const linea10 = document.getElementById('linea10');
const linea11 = document.getElementById('linea11');
const linea12 = document.getElementById('linea12');
const linea13 = document.getElementById('linea13');
const linea14 = document.getElementById('linea14');
const linea15 = document.getElementById('linea15');
const linea16 = document.getElementById('linea16');

function crearLinea() {
  const ax = a.offsetLeft + a.offsetWidth / 2;
  const ay = a.offsetTop + a.offsetHeight / 2;
  const bx = b.offsetLeft + b.offsetWidth / 2;
  const by = b.offsetTop + b.offsetHeight / 2;
  const cx = c.offsetLeft + c.offsetWidth / 2;
  const cy = c.offsetTop + c.offsetHeight / 2;  
  const dx = d.offsetLeft + d.offsetWidth / 2;
  const dy = d.offsetTop + d.offsetHeight / 2;
  const ex = e.offsetLeft + e.offsetWidth / 2;
  const ey = e.offsetTop + e.offsetHeight / 2;    
  const fx = f.offsetLeft + f.offsetWidth / 2;
  const fy = f.offsetTop + f.offsetHeight / 2;
  const gx = g.offsetLeft + g.offsetWidth / 2;
  const gy = g.offsetTop + g.offsetHeight / 2;  
  const hx = h.offsetLeft + h.offsetWidth / 2;
  const hy = h.offsetTop + h.offsetHeight / 2;

  const ix = i.offsetLeft + i.offsetWidth / 2;
  const iy = i.offsetTop + i.offsetHeight / 2;
  const jx = j.offsetLeft + j.offsetWidth / 2;
  const jy = j.offsetTop + j.offsetHeight / 2;
  const kx = k.offsetLeft + k.offsetWidth / 2;
  const ky = k.offsetTop + k.offsetHeight / 2;
  const lx = l.offsetLeft + l.offsetWidth / 2;
  const ly = l.offsetTop + l.offsetHeight / 2;
  const mx = m.offsetLeft + m.offsetWidth / 2;
  const my = m.offsetTop + m.offsetHeight / 2;
  const nx = n.offsetLeft + n.offsetWidth / 2;
  const ny = n.offsetTop + n.offsetHeight / 2;
  const ox = o.offsetLeft + o.offsetWidth / 2;
  const oy = o.offsetTop + o.offsetHeight / 2;
  const px = p.offsetLeft + p.offsetWidth / 2;
  const py = p.offsetTop + p.offsetHeight / 2;        
  
  const circuloIx = circuloI.offsetLeft + circuloI.offsetWidth / 2;
  const circuloIy = circuloI.offsetTop + circuloI.offsetHeight / 2;

  const circuloDx = circuloD.offsetLeft + circuloD.offsetWidth / 2;
  const circuloDy = circuloD.offsetTop + circuloD.offsetHeight / 2;
  
  linea1.setAttribute('x1', ax);
  linea1.setAttribute('y1', ay);
  linea1.setAttribute('x2', circuloIx);
  linea1.setAttribute('y2', circuloIy);
  linea2.setAttribute('x1', bx);
  linea2.setAttribute('y1', by);
  linea2.setAttribute('x2', circuloIx);
  linea2.setAttribute('y2', circuloIy);
  linea3.setAttribute('x1', cx);
  linea3.setAttribute('y1', cy);
  linea3.setAttribute('x2', circuloIx);
  linea3.setAttribute('y2', circuloIy);
  linea4.setAttribute('x1', dx);
  linea4.setAttribute('y1', dy);
  linea4.setAttribute('x2', circuloIx);
  linea4.setAttribute('y2', circuloIy);
  linea5.setAttribute('x1', ex);
  linea5.setAttribute('y1', ey);
  linea5.setAttribute('x2', circuloIx);
  linea5.setAttribute('y2', circuloIy);
  linea6.setAttribute('x1', fx);
  linea6.setAttribute('y1', fy);
  linea6.setAttribute('x2', circuloIx);
  linea6.setAttribute('y2', circuloIy);
  linea7.setAttribute('x1', gx);
  linea7.setAttribute('y1', gy);
  linea7.setAttribute('x2', circuloIx);
  linea7.setAttribute('y2', circuloIy);
  linea8.setAttribute('x1', hx);
  linea8.setAttribute('y1', hy);
  linea8.setAttribute('x2', circuloIx);
  linea8.setAttribute('y2', circuloIy);

  linea9.setAttribute('x1', circuloDx);
  linea9.setAttribute('y1', circuloDy);
  linea9.setAttribute('x2', ix);
  linea9.setAttribute('y2', iy);
  linea10.setAttribute('x1', circuloDx);
  linea10.setAttribute('y1', circuloDy);
  linea10.setAttribute('x2', jx);
  linea10.setAttribute('y2', jy);  
  linea11.setAttribute('y1', circuloDy);
  linea11.setAttribute('x1', circuloDx);
  linea11.setAttribute('x2', kx);
  linea11.setAttribute('y2', ky);
  linea12.setAttribute('x1', circuloDx);
  linea12.setAttribute('y1', circuloDy);
  linea12.setAttribute('x2', lx);
  linea12.setAttribute('y2', ly);  
  linea13.setAttribute('x1', circuloDx);
  linea13.setAttribute('y1', circuloDy);
  linea13.setAttribute('x2', mx);
  linea13.setAttribute('y2', my);
  linea14.setAttribute('x1', circuloDx);
  linea14.setAttribute('y1', circuloDy);
  linea14.setAttribute('x2', nx);
  linea14.setAttribute('y2', ny);  
  linea15.setAttribute('x1', circuloDx);
  linea15.setAttribute('y1', circuloDy);
  linea15.setAttribute('x2', ox);
  linea15.setAttribute('y2', oy);
  linea16.setAttribute('x1', circuloDx);
  linea16.setAttribute('y1', circuloDy);
  linea16.setAttribute('x2', px);
  linea16.setAttribute('y2', py);  

}
crearLinea();

let estaVisible = true;

function alternarVisibilidadLinea() {
    estaVisible = !estaVisible;

    if (estaVisible) {
        linea1.style.display = 'block';
    } else {
        linea1.style.display = 'none';
    }
  }

a.addEventListener('click', alternarVisibilidadLinea);
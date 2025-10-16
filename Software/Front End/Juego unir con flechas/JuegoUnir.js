let BotonVolver = document.getElementById("VolverInicio");
function VolverAlInicio (){
    window.location.href='../Pantalla de inicio estudiantes/Inicio estudiantes.html'
}
BotonVolver.addEventListener("click", (VolverAlInicio));
const svg = document.getElementById('svg');
const container = document.getElementById('game');
let startPoint = null;                // elemento DOM seleccionado primero
const connections = new Map();        // key -> { line: SVGLineElement, fromEl, toEl }

// utilidad: centro del elemento relativo al contenedor
function centerOf(el){
  const r = el.getBoundingClientRect();
  const cr = container.getBoundingClientRect();
  return { x: r.left + r.width/2 - cr.left, y: r.top + r.height/2 - cr.top };
}

// dibujar línea simple
function createLine(fromEl, toEl){
  const p1 = centerOf(fromEl);
  const p2 = centerOf(toEl);
  const line = document.createElementNS('http://www.w3.org/2000/svg','line');
  line.setAttribute('x1', p1.x);
  line.setAttribute('y1', p1.y);
  line.setAttribute('x2', p2.x);
  line.setAttribute('y2', p2.y);
  line.style.cursor = 'pointer';

  // permitir borrar la línea haciendo click sobre la misma (adicional)
  line.addEventListener('click', (ev)=>{
    ev.stopPropagation();
    const key = `${fromEl.dataset.id}-${toEl.dataset.id}`;
    removeConnection(key);
  });

  svg.appendChild(line);
  return line;
}

function removeConnection(key){
  const obj = connections.get(key);
  if(!obj) return;
  if(obj.line && obj.line.parentNode) obj.line.parentNode.removeChild(obj.line);
  connections.delete(key);
}

// actualizar (reposicionar) todas las líneas (por resize/scroll)
function redrawAll(){
  for(const [key, obj] of connections){
    const p1 = centerOf(obj.fromEl);
    const p2 = centerOf(obj.toEl);
    obj.line.setAttribute('x1', p1.x);
    obj.line.setAttribute('y1', p1.y);
    obj.line.setAttribute('x2', p2.x);
    obj.line.setAttribute('y2', p2.y);
  }
}

// función que maneja el click en puntos
function handlePointClick(e){
  const el = e.currentTarget;
  const side = el.dataset.side; // 'left', 'center-left', 'center-right', 'right'
  // Si no hay startPoint, dejamos el que se clickeó como start (solo si es left o center-right)
  if(!startPoint){
    // permitimos iniciar desde left (para conectar a center-left)
    // o iniciar desde center-right (para conectar a right)
    if(side === 'left' || side === 'center-right'){
      startPoint = el;
      el.classList.add('selected');
    } else {
      // si intentan iniciar desde centro-izq o right no hacemos nada
      // (se podría permitir inicio inverso, pero seguimos la regla que pediste)
      return;
    }
    return;
  }

  // si ya hay startPoint, el segundo click debe completar la pareja
  const from = startPoint;
  const to = el;

  // decide si la pareja es válida según tu regla:
  // left -> center-left
  // center-right -> right
  const validLeft = from.dataset.side === 'left' && to.dataset.side === 'center-left';
  const validRight = from.dataset.side === 'center-right' && to.dataset.side === 'right';

  if(!validLeft && !validRight){
    // seleccion inválida: limpiamos selección y salimos
    startPoint.classList.remove('selected');
    startPoint = null;
    return;
  }

  const key = `${from.dataset.id}-${to.dataset.id}`;

  if(connections.has(key)){
    // ya existe: borrarla (toggle off)
    removeConnection(key);
  } else {
    // no existe: crearla (toggle on)
    const line = createLine(from, to);
    connections.set(key, { line, fromEl: from, toEl: to });
  }

  // limpiamos selección visual y lógica
  startPoint.classList.remove('selected');
  startPoint = null;
}

// enlazar handlers a todos los puntos
document.querySelectorAll('.circle, .center-point').forEach(pt => {
  // permitimos pointer events en SVG line con stroke, y queremos que clicks en puntos no pasen al svg
  pt.addEventListener('click', handlePointClick);
});

// redibujar al redimensionar ventana (para mantener líneas en posición)
window.addEventListener('resize', redrawAll);

// observar cambios del contenedor (por ejemplo, si la página cambia tamaño interno)
const ro = new ResizeObserver(redrawAll);
ro.observe(container);
const initial=[
{id:'s1',brand:'Sesderma',name:'SESCACAY',type:'Крем',desc:'Крем для лица',size:'50 мл',image:'product-5.webp',price:6619,effect:'Питание'},
{id:'s2',brand:'Sesderma',name:'SESCACAY',type:'Масло',desc:'Масло интенсивного действия',size:'100 мл',image:'product-0.webp',price:8580,effect:'Питание'},
{id:'s3',brand:'Sesderma',name:'SESCACAY',type:'Крем',desc:'Крем для области вокруг глаз',size:'15 мл',image:'product-3.webp',price:5695,effect:'Комфорт'},
{id:'s4',brand:'Sesderma',name:'EXOSES',type:'Набор',desc:'Крем и сыворотка',size:'50 мл + 15 мл',image:'product-6.webp',price:14424,effect:'Комплексный уход'},
{id:'l1',brand:'laCabine',name:'FLASH EFFECT',type:'Ампулы',desc:'Ампулы для лица',image:'lc-product-0.jpg',effect:'Комфорт'},
{id:'l2',brand:'laCabine',name:'VIT-C COMPLEX',type:'Сыворотка',desc:'Сыворотка с витамином C',image:'lc-product-1.jpg',effect:'Сияние'},
{id:'l3',brand:'laCabine',name:'VIT-C COMPLEX',type:'Ампулы',desc:'Ампулы с витамином C',image:'lc-product-2.jpg',effect:'Сияние'},
{id:'l4',brand:'laCabine',name:'NIACINAMIDE [PRO]',type:'Сыворотка',desc:'Сыворотка для лица',image:'lc-product-3.jpg',effect:'Ежедневный уход'},
{id:'l5',brand:'laCabine',name:'NIACINAMIDE',type:'Крем',desc:'Сыворотка-крем',image:'lc-product-4.jpg',effect:'Ежедневный уход'}];

const extra=[{id:'hy1',brand:'Sesderma',name:'HIDRADERM TRX',type:'Тоник',desc:'Увлажняющий тоник для лица',image:'brief-hidraderm.jpg',effect:'Увлажнение',area:'Лицо'},{id:'le1',brand:'laCabine',name:'EYE CONTOUR',type:'Сыворотка',desc:'Сыворотка для контура вокруг глаз',size:'30 мл',image:'brief-lceye.jpg',effect:'Ежедневный уход',area:'Глаза'},
{id:'h1',brand:'laCabine',name:'HYDRA GLOW',type:'Шампунь',desc:'Шампунь для сухих волос',size:'450 мл',image:'brief-hair-0.jpg',effect:'Увлажнение',area:'Волосы'},
{id:'h2',brand:'laCabine',name:'EXPERT REPAIR',type:'Шампунь',desc:'Шампунь для повреждённых волос',size:'450 мл',image:'brief-hair-1.jpg',effect:'Восстановление',area:'Волосы'},
{id:'c1',brand:'Sesderma',name:'C-VIT',type:'Сыворотка',desc:'C-VIT 5 Липосомальная сыворотка',image:'brief-cvit-0.png',effect:'Сияние',area:'Лицо'},
{id:'c2',brand:'Sesderma',name:'C-VIT',type:'Молочко',desc:'Молочко для тела с сияющими пигментами',image:'brief-cvit-4.png',effect:'Сияние',area:'Тело'},
{id:'c3',brand:'Sesderma',name:'C-VIT',type:'Крем',desc:'Крем-контур вокруг глаз',image:'brief-cvit-6.jpg',effect:'Сияние',area:'Глаза'},
{id:'c4',brand:'Sesderma',name:'C-VIT',type:'Крем',desc:'Увлажняющий крем для лица',image:'brief-cvit-7.jpg',effect:'Увлажнение',area:'Лицо'},
{id:'b1',brand:'Sesderma',name:'SESNATURA',type:'Крем',desc:'Подтягивающий крем для тела и груди',image:'brief-body-0.jpeg',effect:'Упругость',area:'Тело'},
{id:'cl1',brand:'Sesderma',name:'SENSYSES',type:'Лосьон',desc:'CLASSIC Липосомальный лосьон для снятия макияжа',image:'brief-clean-0.jpg',effect:'Очищение',area:'Лицо'}];
export const catalogProducts=[...initial.map(p=>({...p,area:p.id==='s3'?'Глаза':'Лицо'})),...extra];
export function catalogURL(base,brand='Все',filters={}){return base+'catalog/?'+new URLSearchParams({brand,...filters})}
export function selectProducts(params){const protocol=params.protocol;const groups={'Утренний уход':['c1','c4','hy1','l2','l4'],'Вечерний уход':['cl1','s1','l4','l5']};return catalogProducts.filter(p=>(!groups[protocol]||groups[protocol].includes(p.id))&&['brand','type','effect','area','collection'].every(k=>!params[k]||params[k]==='Все'||(k==='collection'?p.name.startsWith(params[k]):p[k]===params[k]))&&(!params.q||(p.name+' '+p.desc+' '+p.brand).toLowerCase().includes(params.q.toLowerCase())))}

import { useState } from 'react';
import { Search, Download, Calendar, Clock, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

interface Transaction {
  fecha: string;
  hora: string;
  grupoComercial: string;
  midRed: string;
  codigoComercio: string;
  nombreComercio: string;
  tidSerie: string;
  tipoTerminal: string;
  ruc: string;
  numeroAutorizacion: string;
  referenciaVoucher: string;
  tipoTransaccion: string;
  autorizador: string;
  tipoTarjeta: string;
  numeroLote: string;
  numeroTarjeta: string;
  estadoTransaccion: string;
  marca: string;
  giro: string;
  empresa: string;
  monto: string;
  montoComision: string;
  montoIva: string;
  montoNeto: string;
  moneda: string;
  paisOrigen: string;
  ciudadComercio: string;
  direccionComercio: string;
  telefonoComercio: string;
  emailComercio: string;
  procesador: string;
  bin: string;
  cuotas: string;
  tipoCredito: string;
}

function App() {
  const [dateFrom, setDateFrom] = useState('');
  const [timeFrom, setTimeFrom] = useState('12:00');
  const [dateTo, setDateTo] = useState('');
  const [timeTo, setTimeTo] = useState('23:59');
  const [currentPage, setCurrentPage] = useState(1);
  const [showColumns, setShowColumns] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const [visibleColumns, setVisibleColumns] = useState({
    fecha: true,
    hora: true,
    grupoComercial: true,
    midRed: true,
    codigoComercio: true,
    nombreComercio: true,
    tidSerie: true,
    tipoTerminal: true,
    ruc: false,
    numeroAutorizacion: false,
    referenciaVoucher: false,
    tipoTransaccion: false,
    autorizador: false,
    tipoTarjeta: false,
    numeroLote: false,
    numeroTarjeta: false,
    estadoTransaccion: false,
    marca: false,
    giro: false,
    empresa: false,
    monto: true,
    montoComision: false,
    montoIva: false,
    montoNeto: false,
    moneda: false,
    paisOrigen: false,
    ciudadComercio: false,
    direccionComercio: false,
    telefonoComercio: false,
    emailComercio: false,
    procesador: false,
    bin: false,
    cuotas: false,
    tipoCredito: false
  });

  const sampleData: Transaction[] = Array(5).fill(null).map((_, idx) => ({
    fecha: '2025-09-17',
    hora: `14:${40 + idx}:${10 + idx}`,
    grupoComercial: ['NUCOPSA', 'COMERCIAL DEL SUR', 'GRUPO NORTE'][idx % 3],
    midRed: `00000089${5519 + idx}`,
    codigoComercio: `00000089${5519 + idx}`,
    nombreComercio: ['FUEL MARINA', 'SUPERMERCADO CENTRAL', 'RESTAURANT EL BUEN SABOR', 'FARMACIA SALUD', 'TIENDA TECH'][idx],
    tidSerie: `NC08300${idx + 1}`,
    tipoTerminal: 'Pinpad Exclusivo Medianet',
    ruc: `179000123400${idx}`,
    numeroAutorizacion: `${12345678 + idx * 100}`,
    referenciaVoucher: `REF-00${idx + 1}`,
    tipoTransaccion: ['Compra', 'Devolucion', 'Compra', 'Anulacion', 'Compra'][idx],
    autorizador: ['VISA', 'MASTERCARD', 'DINERS', 'AMEX', 'DISCOVER'][idx % 5],
    tipoTarjeta: ['Credito', 'Debito', 'Credito', 'Debito', 'Credito'][idx],
    numeroLote: `${1000 + idx}`,
    numeroTarjeta: `****-****-****-${1234 + idx}`,
    estadoTransaccion: ['Aprobado', 'Aprobado', 'Rechazado', 'Reversado', 'Aprobado'][idx],
    marca: ['Visa', 'Mastercard', 'Diners', 'American Express', 'Discover'][idx],
    giro: ['Combustible', 'Supermercado', 'Restaurante', 'Farmacia', 'Tecnologia'][idx],
    empresa: ['Medianet SA', 'Procesadora del Pacifico', 'Paytech Corp'][idx % 3],
    monto: `$${(50.00 + idx * 25.50).toFixed(2)}`,
    montoComision: `$${(2.50 + idx * 0.75).toFixed(2)}`,
    montoIva: `$${(0.30 + idx * 0.09).toFixed(2)}`,
    montoNeto: `$${(47.20 + idx * 24.66).toFixed(2)}`,
    moneda: 'USD',
    paisOrigen: 'Ecuador',
    ciudadComercio: ['Guayaquil', 'Quito', 'Cuenca', 'Manta', 'Machala'][idx],
    direccionComercio: `Av. Principal ${100 + idx}, Edificio ${idx + 1}`,
    telefonoComercio: `0${idx + 4}-2${300000 + idx * 1000}`,
    emailComercio: `contacto${idx + 1}@comercio.com`,
    procesador: ['Credimatic', 'Datafast', 'Alignet', 'Kushki', 'PayPhone'][idx % 5],
    bin: `${400000 + idx * 100}`,
    cuotas: ['1', '3', '6', '12', '1'][idx],
    tipoCredito: ['Corriente', 'Diferido', 'Diferido', 'Diferido', 'Corriente'][idx]
  }));

  const toggleColumn = (column: keyof typeof visibleColumns) => {
    setVisibleColumns(prev => ({ ...prev, [column]: !prev[column] }));
  };

  const columnLabels = {
    fecha: 'Fecha',
    hora: 'Hora',
    grupoComercial: 'Grupo Comercial',
    midRed: 'MID RED',
    codigoComercio: 'Código Comercio',
    nombreComercio: 'Nombre Comercio',
    tidSerie: 'TID-Serie',
    tipoTerminal: 'Tipo Terminal',
    ruc: 'RUC',
    numeroAutorizacion: 'N° Autorización',
    referenciaVoucher: 'Ref. Voucher',
    tipoTransaccion: 'Tipo Transacción',
    autorizador: 'Autorizador',
    tipoTarjeta: 'Tipo Tarjeta',
    numeroLote: 'N° Lote',
    numeroTarjeta: 'N° Tarjeta',
    estadoTransaccion: 'Estado',
    marca: 'Marca',
    giro: 'Giro',
    empresa: 'Empresa',
    monto: 'Monto',
    montoComision: 'Comisión',
    montoIva: 'IVA',
    montoNeto: 'Monto Neto',
    moneda: 'Moneda',
    paisOrigen: 'País',
    ciudadComercio: 'Ciudad',
    direccionComercio: 'Dirección',
    telefonoComercio: 'Teléfono',
    emailComercio: 'Email',
    procesador: 'Procesador',
    bin: 'BIN',
    cuotas: 'Cuotas',
    tipoCredito: 'Tipo Crédito'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#003B5C] text-white px-4 py-4 flex justify-between items-center sticky top-0 z-40 shadow-lg">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <div className="grid grid-cols-2 gap-1 p-2">
              <div className="w-2 h-2 bg-[#003B5C] rounded-full"></div>
              <div className="w-2 h-2 bg-[#003B5C] rounded-full"></div>
              <div className="w-2 h-2 bg-[#003B5C] rounded-full"></div>
              <div className="w-2 h-2 bg-[#003B5C] rounded-full"></div>
            </div>
          </div>
          <h1 className="text-xl lg:text-2xl font-bold">Visor Transaccional</h1>
        </div>
        <div className="flex items-center gap-2 lg:gap-4">
          <span className="hidden sm:inline text-sm lg:text-base">juan.perez@medianet.com.ec</span>
          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center text-[#003B5C] font-semibold text-sm lg:text-base">
            JP
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-30" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="bg-white w-64 h-full shadow-xl p-4" onClick={e => e.stopPropagation()}>
            <nav className="space-y-2">
              <a href="#" className="block px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors">Dashboard</a>
              <a href="#" className="block px-4 py-3 rounded-lg bg-[#003B5C] text-white">Visor Transaccional</a>
              <a href="#" className="block px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors">Reportes</a>
              <a href="#" className="block px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors">Configuración</a>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="p-3 lg:p-6 max-w-[1920px] mx-auto">
        {/* Filters Section */}
        <div className="bg-white rounded-xl shadow-md p-4 lg:p-6 mb-6">
          {/* Primary Filters - Always visible */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4">
            {/* Fecha Desde */}
            <div>
              <label className="block text-xs lg:text-sm font-medium mb-1 text-gray-700">Fecha Desde:</label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="date"
                    value={dateFrom}
                    onChange={(e) => setDateFrom(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#003B5C] focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <input
                    type="time"
                    value={timeFrom}
                    onChange={(e) => setTimeFrom(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#003B5C] focus:border-transparent w-28"
                  />
                </div>
              </div>
            </div>

            {/* Fecha Hasta */}
            <div>
              <label className="block text-xs lg:text-sm font-medium mb-1 text-gray-700">Fecha Hasta:</label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="date"
                    value={dateTo}
                    onChange={(e) => setDateTo(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#003B5C] focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <input
                    type="time"
                    value={timeTo}
                    onChange={(e) => setTimeTo(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#003B5C] focus:border-transparent w-28"
                  />
                </div>
              </div>
            </div>

            {/* RUC */}
            <div>
              <label className="block text-xs lg:text-sm font-medium mb-1 text-gray-700">RUC:</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#003B5C] focus:border-transparent">
                <option>Todos</option>
                <option>1790001234001</option>
                <option>0992345678001</option>
              </select>
            </div>

            {/* Código de Comercio */}
            <div>
              <label className="block text-xs lg:text-sm font-medium mb-1 text-gray-700">Código de Comercio:</label>
              <input
                type="text"
                placeholder="Ingrese código"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#003B5C] focus:border-transparent"
              />
            </div>

            {/* Estado de la transacción */}
            <div>
              <label className="block text-xs lg:text-sm font-medium mb-1 text-gray-700">Estado:</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#003B5C] focus:border-transparent">
                <option>Todos</option>
                <option>Aprobado</option>
                <option>Rechazado</option>
                <option>Reversado</option>
              </select>
            </div>
          </div>

          {/* Additional Filters - Collapsible */}
          {showMoreFilters && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mt-4 pt-4 border-t border-gray-200">
              <div>
                <label className="block text-xs lg:text-sm font-medium mb-1 text-gray-700">Número de Autorización:</label>
                <input type="text" placeholder="Ingrese número" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#003B5C] focus:border-transparent" />
              </div>
              <div>
                <label className="block text-xs lg:text-sm font-medium mb-1 text-gray-700">TID-Serie:</label>
                <input type="text" placeholder="Ej: NC083001" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#003B5C] focus:border-transparent" />
              </div>
              <div>
                <label className="block text-xs lg:text-sm font-medium mb-1 text-gray-700">Tipo de Transacción:</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#003B5C] focus:border-transparent">
                  <option>Todos</option>
                  <option>Compra</option>
                  <option>Devolución</option>
                  <option>Anulación</option>
                </select>
              </div>
              <div>
                <label className="block text-xs lg:text-sm font-medium mb-1 text-gray-700">Referencia-Voucher:</label>
                <input type="text" placeholder="REF-001" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#003B5C] focus:border-transparent" />
              </div>
              <div>
                <label className="block text-xs lg:text-sm font-medium mb-1 text-gray-700">Autorizador:</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#003B5C] focus:border-transparent">
                  <option>Todos</option>
                  <option>VISA</option>
                  <option>MASTERCARD</option>
                  <option>DINERS</option>
                  <option>AMEX</option>
                </select>
              </div>
              <div>
                <label className="block text-xs lg:text-sm font-medium mb-1 text-gray-700">Tipo de Tarjeta:</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#003B5C] focus:border-transparent">
                  <option>Todos</option>
                  <option>Crédito</option>
                  <option>Débito</option>
                </select>
              </div>
              <div>
                <label className="block text-xs lg:text-sm font-medium mb-1 text-gray-700">Número de Lote:</label>
                <input type="text" placeholder="Ej: 1001" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#003B5C] focus:border-transparent" />
              </div>
              <div>
                <label className="block text-xs lg:text-sm font-medium mb-1 text-gray-700">Número de Tarjeta:</label>
                <input type="text" placeholder="****-****-****-1234" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#003B5C] focus:border-transparent" />
              </div>
              <div>
                <label className="block text-xs lg:text-sm font-medium mb-1 text-gray-700">Marca:</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#003B5C] focus:border-transparent">
                  <option>Todas</option>
                  <option>Visa</option>
                  <option>Mastercard</option>
                  <option>Diners</option>
                  <option>American Express</option>
                </select>
              </div>
              <div>
                <label className="block text-xs lg:text-sm font-medium mb-1 text-gray-700">Giro:</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#003B5C] focus:border-transparent">
                  <option>Todos</option>
                  <option>Combustible</option>
                  <option>Supermercado</option>
                  <option>Restaurante</option>
                  <option>Farmacia</option>
                </select>
              </div>
              <div>
                <label className="block text-xs lg:text-sm font-medium mb-1 text-gray-700">Empresa:</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#003B5C] focus:border-transparent">
                  <option>Todas</option>
                  <option>Medianet SA</option>
                  <option>Procesadora del Pacifico</option>
                  <option>Paytech Corp</option>
                </select>
              </div>
              <div>
                <label className="block text-xs lg:text-sm font-medium mb-1 text-gray-700">Procesador:</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#003B5C] focus:border-transparent">
                  <option>Todos</option>
                  <option>Credimatic</option>
                  <option>Datafast</option>
                  <option>Alignet</option>
                </select>
              </div>
              <div>
                <label className="block text-xs lg:text-sm font-medium mb-1 text-gray-700">Ciudad:</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#003B5C] focus:border-transparent">
                  <option>Todas</option>
                  <option>Guayaquil</option>
                  <option>Quito</option>
                  <option>Cuenca</option>
                </select>
              </div>
              <div>
                <label className="block text-xs lg:text-sm font-medium mb-1 text-gray-700">Moneda:</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#003B5C] focus:border-transparent">
                  <option>USD</option>
                  <option>EUR</option>
                  <option>COP</option>
                </select>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 mt-4 justify-between items-center">
            <button
              onClick={() => setShowMoreFilters(!showMoreFilters)}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center gap-2 text-sm lg:text-base border border-gray-300"
            >
              {showMoreFilters ? (
                <>
                  <X size={18} />
                  Ocultar filtros
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Más filtros
                </>
              )}
            </button>
            <div className="flex gap-2">
              <button className="px-6 py-2.5 bg-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-400 transition-colors text-sm lg:text-base">
                Limpiar
              </button>
              <button className="px-6 py-2.5 bg-[#FF8C00] text-white rounded-lg font-medium hover:bg-[#E67E00] transition-colors flex items-center justify-center gap-2 text-sm lg:text-base">
                <Search size={18} />
                Buscar
              </button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Table Header Info */}
          <div className="p-4 border-b border-gray-200 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3">
            <div className="flex flex-wrap items-center gap-2 text-xs lg:text-sm">
              <span className="font-semibold">Total de Registros: <span className="text-[#003B5C]">1000</span></span>
              <span className="font-semibold">Monto: <span className="text-green-600">$ 3,000,000.00</span></span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setShowColumns(!showColumns)}
                className="px-4 py-2 bg-[#FF8C00] text-white rounded-lg font-medium hover:bg-[#E67E00] transition-colors flex items-center gap-2 text-xs lg:text-sm"
              >
                <Menu size={16} />
                Columnas ({Object.values(visibleColumns).filter(Boolean).length})
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2 text-xs lg:text-sm">
                <Download size={16} />
                Descargar
              </button>
            </div>
          </div>

          {/* Column Selector Panel */}
          {showColumns && (
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <h3 className="font-semibold mb-3 text-sm lg:text-base">Seleccionar columnas visibles:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                {Object.entries(columnLabels).map(([key, label]) => (
                  <label key={key} className="flex items-center gap-2 cursor-pointer hover:bg-white p-2 rounded transition-colors">
                    <input
                      type="checkbox"
                      checked={visibleColumns[key as keyof typeof visibleColumns]}
                      onChange={() => toggleColumn(key as keyof typeof visibleColumns)}
                      className="w-4 h-4 text-[#003B5C] focus:ring-2 focus:ring-[#003B5C] rounded"
                    />
                    <span className="text-xs lg:text-sm">{label}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Responsive Table Container */}
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              {/* Desktop Table */}
              <div className="hidden lg:block overflow-auto" style={{ maxHeight: '600px' }}>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100 sticky top-0 z-10">
                    <tr>
                      {visibleColumns.fecha && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Fecha</th>}
                      {visibleColumns.hora && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Hora</th>}
                      {visibleColumns.grupoComercial && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Grupo Comercial</th>}
                      {visibleColumns.midRed && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">MID RED</th>}
                      {visibleColumns.codigoComercio && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Código Comercio</th>}
                      {visibleColumns.nombreComercio && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Nombre Comercio</th>}
                      {visibleColumns.tidSerie && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">TID-Serie</th>}
                      {visibleColumns.tipoTerminal && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Tipo Terminal</th>}
                      {visibleColumns.ruc && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">RUC</th>}
                      {visibleColumns.numeroAutorizacion && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">N° Autorización</th>}
                      {visibleColumns.referenciaVoucher && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Ref. Voucher</th>}
                      {visibleColumns.tidSerieFilter && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">TID-Serie (F)</th>}
                      {visibleColumns.tipoTransaccion && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Tipo Transacción</th>}
                      {visibleColumns.autorizador && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Autorizador</th>}
                      {visibleColumns.tipoTarjeta && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Tipo Tarjeta</th>}
                      {visibleColumns.numeroLote && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">N° Lote</th>}
                      {visibleColumns.numeroTarjeta && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">N° Tarjeta</th>}
                      {visibleColumns.estadoTransaccion && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Estado</th>}
                      {visibleColumns.marca && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Marca</th>}
                      {visibleColumns.giro && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Giro</th>}
                      {visibleColumns.empresa && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Empresa</th>}
                      {visibleColumns.monto && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Monto</th>}
                      {visibleColumns.montoComision && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Comisión</th>}
                      {visibleColumns.montoIva && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">IVA</th>}
                      {visibleColumns.montoNeto && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Monto Neto</th>}
                      {visibleColumns.moneda && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Moneda</th>}
                      {visibleColumns.paisOrigen && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">País</th>}
                      {visibleColumns.ciudadComercio && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Ciudad</th>}
                      {visibleColumns.direccionComercio && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Dirección</th>}
                      {visibleColumns.telefonoComercio && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Teléfono</th>}
                      {visibleColumns.emailComercio && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Email</th>}
                      {visibleColumns.procesador && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Procesador</th>}
                      {visibleColumns.bin && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">BIN</th>}
                      {visibleColumns.cuotas && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Cuotas</th>}
                      {visibleColumns.tipoCredito && <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Tipo Crédito</th>}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sampleData.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        {visibleColumns.fecha && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.fecha}</td>}
                        {visibleColumns.hora && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.hora}</td>}
                        {visibleColumns.grupoComercial && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.grupoComercial}</td>}
                        {visibleColumns.midRed && <td className="px-4 py-3 text-sm text-blue-600 whitespace-nowrap">{row.midRed}</td>}
                        {visibleColumns.codigoComercio && <td className="px-4 py-3 text-sm text-blue-600 whitespace-nowrap">{row.codigoComercio}</td>}
                        {visibleColumns.nombreComercio && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.nombreComercio}</td>}
                        {visibleColumns.tidSerie && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.tidSerie}</td>}
                        {visibleColumns.tipoTerminal && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.tipoTerminal}</td>}
                        {visibleColumns.ruc && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.ruc}</td>}
                        {visibleColumns.numeroAutorizacion && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.numeroAutorizacion}</td>}
                        {visibleColumns.referenciaVoucher && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.referenciaVoucher}</td>}
                        {visibleColumns.tipoTransaccion && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.tipoTransaccion}</td>}
                        {visibleColumns.autorizador && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.autorizador}</td>}
                        {visibleColumns.tipoTarjeta && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.tipoTarjeta}</td>}
                        {visibleColumns.numeroLote && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.numeroLote}</td>}
                        {visibleColumns.numeroTarjeta && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.numeroTarjeta}</td>}
                        {visibleColumns.estadoTransaccion && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.estadoTransaccion}</td>}
                        {visibleColumns.marca && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.marca}</td>}
                        {visibleColumns.giro && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.giro}</td>}
                        {visibleColumns.empresa && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.empresa}</td>}
                        {visibleColumns.monto && <td className="px-4 py-3 text-sm font-semibold text-green-600 whitespace-nowrap">{row.monto}</td>}
                        {visibleColumns.montoComision && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.montoComision}</td>}
                        {visibleColumns.montoIva && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.montoIva}</td>}
                        {visibleColumns.montoNeto && <td className="px-4 py-3 text-sm font-semibold text-gray-900 whitespace-nowrap">{row.montoNeto}</td>}
                        {visibleColumns.moneda && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.moneda}</td>}
                        {visibleColumns.paisOrigen && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.paisOrigen}</td>}
                        {visibleColumns.ciudadComercio && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.ciudadComercio}</td>}
                        {visibleColumns.direccionComercio && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.direccionComercio}</td>}
                        {visibleColumns.telefonoComercio && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.telefonoComercio}</td>}
                        {visibleColumns.emailComercio && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.emailComercio}</td>}
                        {visibleColumns.procesador && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.procesador}</td>}
                        {visibleColumns.bin && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.bin}</td>}
                        {visibleColumns.cuotas && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.cuotas}</td>}
                        {visibleColumns.tipoCredito && <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.tipoCredito}</td>}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden divide-y divide-gray-200">
                {sampleData.map((row, idx) => (
                  <div key={idx} className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="space-y-3">
                      {/* Header */}
                      <div className="flex justify-between items-start pb-2 border-b border-gray-200">
                        <div>
                          <div className="text-xs text-gray-500">Fecha y Hora</div>
                          <div className="font-semibold text-[#003B5C]">{row.fecha} {row.hora}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-500">Estado</div>
                          <div className={`font-medium text-sm ${
                            row.estadoTransaccion === 'Aprobado' ? 'text-green-600' :
                            row.estadoTransaccion === 'Rechazado' ? 'text-red-600' :
                            'text-orange-600'
                          }`}>{row.estadoTransaccion}</div>
                        </div>
                      </div>

                      {/* Comercio Info */}
                      {visibleColumns.nombreComercio && (
                        <div>
                          <div className="text-xs text-gray-500">Comercio</div>
                          <div className="font-medium">{row.nombreComercio}</div>
                        </div>
                      )}

                      {/* Grid Info */}
                      <div className="grid grid-cols-2 gap-3">
                        {visibleColumns.monto && (
                          <div>
                            <div className="text-xs text-gray-500">Monto</div>
                            <div className="text-sm font-semibold text-green-600">{row.monto}</div>
                          </div>
                        )}
                        {visibleColumns.tipoTransaccion && (
                          <div>
                            <div className="text-xs text-gray-500">Tipo</div>
                            <div className="text-sm">{row.tipoTransaccion}</div>
                          </div>
                        )}
                        {visibleColumns.marca && (
                          <div>
                            <div className="text-xs text-gray-500">Marca</div>
                            <div className="text-sm">{row.marca}</div>
                          </div>
                        )}
                        {visibleColumns.numeroTarjeta && (
                          <div>
                            <div className="text-xs text-gray-500">N° Tarjeta</div>
                            <div className="text-sm">{row.numeroTarjeta}</div>
                          </div>
                        )}
                        {visibleColumns.numeroAutorizacion && (
                          <div>
                            <div className="text-xs text-gray-500">N° Autorización</div>
                            <div className="text-sm">{row.numeroAutorizacion}</div>
                          </div>
                        )}
                        {visibleColumns.procesador && (
                          <div>
                            <div className="text-xs text-gray-500">Procesador</div>
                            <div className="text-sm">{row.procesador}</div>
                          </div>
                        )}
                      </div>

                      {/* Additional Info - Collapsible style */}
                      <details className="text-xs">
                        <summary className="cursor-pointer text-[#003B5C] font-medium hover:underline">Ver más detalles</summary>
                        <div className="mt-2 space-y-2 pl-2 border-l-2 border-gray-200">
                          {visibleColumns.grupoComercial && (
                            <div className="flex justify-between">
                              <span className="text-gray-500">Grupo Comercial:</span>
                              <span className="font-medium">{row.grupoComercial}</span>
                            </div>
                          )}
                          {visibleColumns.midRed && (
                            <div className="flex justify-between">
                              <span className="text-gray-500">MID RED:</span>
                              <span className="text-blue-600">{row.midRed}</span>
                            </div>
                          )}
                          {visibleColumns.tidSerie && (
                            <div className="flex justify-between">
                              <span className="text-gray-500">TID-Serie:</span>
                              <span>{row.tidSerie}</span>
                            </div>
                          )}
                          {visibleColumns.ciudadComercio && (
                            <div className="flex justify-between">
                              <span className="text-gray-500">Ciudad:</span>
                              <span>{row.ciudadComercio}</span>
                            </div>
                          )}
                          {visibleColumns.cuotas && (
                            <div className="flex justify-between">
                              <span className="text-gray-500">Cuotas:</span>
                              <span>{row.cuotas}</span>
                            </div>
                          )}
                          {visibleColumns.montoComision && (
                            <div className="flex justify-between">
                              <span className="text-gray-500">Comisión:</span>
                              <span>{row.montoComision}</span>
                            </div>
                          )}
                          {visibleColumns.montoNeto && (
                            <div className="flex justify-between">
                              <span className="text-gray-500">Monto Neto:</span>
                              <span className="font-medium">{row.montoNeto}</span>
                            </div>
                          )}
                        </div>
                      </details>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="p-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="flex items-center gap-2 text-xs lg:text-sm">
              <span>Mostrando</span>
              <select className="px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-[#003B5C]">
                <option>5</option>
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span>registros por página</span>
            </div>
            <div className="flex items-center gap-1">
              <button className="p-2 hover:bg-gray-100 rounded transition-colors disabled:opacity-50" disabled>
                <ChevronLeft size={18} />
              </button>
              {[1, 2, 3, 4].map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1.5 rounded transition-colors text-sm ${
                    currentPage === page
                      ? 'bg-[#FF8C00] text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
              <span className="px-2 text-gray-500">...</span>
              <button className="px-3 py-1.5 hover:bg-gray-100 rounded transition-colors text-sm">37</button>
              <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

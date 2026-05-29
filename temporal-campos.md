# Campos de interpolación — Templates temporales

## temporal-alerta-de-seguridad
| Campo | Descripción |
|---|---|
| `%{nombre}%` | Nombre del usuario |
| `%{dispositivo}%` | Dispositivo y sistema operativo |
| `%{fecha_hora}%` | Fecha y hora del inicio de sesión |
| `%{ip}%` | Dirección IP |

## temporal-bienvenida-onboarding
| Campo | Descripción |
|---|---|
| `%{nombre}%` | Nombre del usuario |

## temporal-cambio-de-contrasena
| Campo | Descripción |
|---|---|
| `%{nombre}%` | Nombre del usuario |

## temporal-confirmacion-cambio-celu
| Campo | Descripción |
|---|---|
| `%{nombre}%` | Nombre del usuario |
| `%{telefono}%` | Nuevo número de teléfono |
| `%{dispositivo}%` | Dispositivo y sistema operativo |
| `%{fecha_hora}%` | Fecha y hora de la acción |
| `%{ip}%` | Dirección IP |

## temporal-confirmacion-creacion-cvu
| Campo | Descripción |
|---|---|
| `%{nombre}%` | Nombre del usuario |
| `%{cvu}%` | Número de CVU |
| `%{alias}%` | Alias de la cuenta virtual |
| `%{nombre_completo}%` | Nombre y apellido completo |
| `%{cuil}%` | CUIL/CUIT del titular |

## temporal-cuenta-eliminada
| Campo | Descripción |
|---|---|
| `%{nombre}%` | Nombre del usuario |
| `%{fecha_baja}%` | Fecha desde la que no tendrá acceso |

## temporal-devoluciones
| Campo | Descripción |
|---|---|
| `%{nombre}%` | Nombre del usuario |
| `%{motivo}%` | Motivo de la devolución |
| `%{fecha_compra}%` | Fecha de la compra original |
| `%{hora_compra}%` | Hora de la compra original |
| `%{sucursal}%` | Sucursal donde se realizó la compra |
| `%{monto}%` | Monto devuelto |
| `%{transaccion}%` | Número de transacción |
| `%{tarjeta}%` | Tarjeta acreditada |
| `%{dias}%` | Días hábiles estimados para acreditación |

## temporal-ingresos-cash-out
| Campo | Descripción |
|---|---|
| `%{nombre}%` | Nombre del usuario |
| `%{monto}%` | Monto transferido |
| `%{beneficiario_nombre}%` | Nombre y apellido del beneficiario |
| `%{beneficiario_entidad}%` | Entidad receptora |
| `%{beneficiario_cuenta}%` | Número de cuenta del beneficiario |
| `%{motivo}%` | Motivo de la transferencia |

## temporal-intento-ingreso
| Campo | Descripción |
|---|---|
| `%{nombre}%` | Nombre del usuario |

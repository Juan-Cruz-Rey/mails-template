// Variables que dependen del ambiente.
// Cada ambiente se compila a su propia carpeta: dist/<env>/
//
// Para agregar una variable que cambie por ambiente, sumala a las 4 entradas.
const ENV_CONFIG = {
  dev: {
    // S3 dev-test
    HERO_GENERAL: 'https://static-public-content-dev-test-us01-coto.s3.us-east-1.amazonaws.com/lambda-notifications-email/otp-template/images/mail-generico.png',
    // TODO: completar URL de logo para dev
    LOGO: 'https://res.cloudinary.com/difzloxvo/image/upload/v1779362354/logo_ksafym.png',
  },
  test: {
    // S3 dev-test
    HERO_GENERAL: 'https://static-public-content-dev-test-us01-coto.s3.us-east-1.amazonaws.com/lambda-notifications-email/otp-template/images/mail-generico.png',
    // TODO: completar URL de logo para test
    LOGO: 'https://res.cloudinary.com/difzloxvo/image/upload/v1779362354/logo_ksafym.png',
  },
  staging: {
    // S3 staging
    HERO_GENERAL: 'https://static-public-content-staging-us01-coto.s3.us-east-1.amazonaws.com/lambda-notifications-email/otp-template/images/mail-generico.png',
    // TODO: completar URL de logo para staging
    LOGO: 'https://res.cloudinary.com/difzloxvo/image/upload/v1779362354/logo_ksafym.png',
  },
  prod: {
    // S3 prod
    HERO_GENERAL: 'https://static-public-content-us01-coto.s3.us-east-1.amazonaws.com/lambda-notifications-email/otp-template/images/mail-generico.png',
    // TODO: completar URL de logo para prod
    LOGO: 'https://res.cloudinary.com/difzloxvo/image/upload/v1779362354/logo_ksafym.png',
  },
};

// Variables comunes a todos los ambientes.
const COMMON = {
  // Hero images
  HERO_ALERTA_DE_SEGURIDAD:      'https://res.cloudinary.com/difzloxvo/image/upload/v1779362353/alerta-de-seguridad_noe1zc.png',
  HERO_BIENVENIDA_ONBOARDING:    'https://res.cloudinary.com/difzloxvo/image/upload/v1779362353/bienvenida-onboarding_zeklwh.png',
  HERO_CAMBIO_DE_CONTRASENA:     'https://res.cloudinary.com/difzloxvo/image/upload/v1779362353/cambio-de-crontrasena_smejer.png',
  HERO_CONFIRMACION_CAMBIO_CELU: 'https://res.cloudinary.com/difzloxvo/image/upload/v1779362353/img-confirmacion-cambio-celu_oluqca.png',
  HERO_CONFIRMACION_CREACION_CVU:'https://res.cloudinary.com/difzloxvo/image/upload/v1779362353/confirmacion-creacion-cvu_vnfvn6.png',
  HERO_CUENTA_ELIMINADA:         'https://res.cloudinary.com/difzloxvo/image/upload/v1779362353/cuenta-eliminada_swfkkg.png',
  HERO_DEVOLUCIONES:             'https://res.cloudinary.com/difzloxvo/image/upload/v1779362353/img-devoluciones_giincb.png',
  HERO_INGRESOS_CASH_OUT:        'https://res.cloudinary.com/difzloxvo/image/upload/v1779362354/Ingresos-cash-out_va7lnd.png',
  HERO_INTENTO_INGRESO:          'https://res.cloudinary.com/difzloxvo/image/upload/v1779362353/img-intento-ingreso_xwnuto.png',

  // Icons
  ICON_BANK:                'https://res.cloudinary.com/difzloxvo/image/upload/v1780003913/icons/bank_cjpj1c.png', // ready
  ICON_FILTER_CENTER_FOCUS: 'https://res.cloudinary.com/difzloxvo/image/upload/v1780003913/icons/filter-center-focus_q60bmt.png', // ready
  ICON_LAPTOP:              'https://res.cloudinary.com/difzloxvo/image/upload/v1780003913/icons/laptop_zuork2.png', // ready
  ICON_MONEY_BAG:           'https://res.cloudinary.com/difzloxvo/image/upload/v1780003914/icons/money-bag_fqzb3t.png', // ready
  ICON_PERSON:              'https://res.cloudinary.com/difzloxvo/image/upload/v1780003913/icons/person_wzngkt.png',  // ready
  ICON_PHONE:               'https://res.cloudinary.com/difzloxvo/image/upload/v1780004508/phone_f0rfn5.png',  // ready
  ICON_SCHEDULE:            'https://res.cloudinary.com/difzloxvo/image/upload/v1780003914/icons/schedule_wv9tjv.png', // ready
  ICON_WORLD:               'https://res.cloudinary.com/difzloxvo/image/upload/v1780003914/icons/world_lzbuot.png', // ready
};

const ENVIRONMENTS = Object.keys(ENV_CONFIG);

// Devuelve el set de variables completo para un ambiente dado.
function configForEnv(env) {
  if (!ENV_CONFIG[env]) {
    throw new Error(`Ambiente desconocido: "${env}". Validos: ${ENVIRONMENTS.join(', ')}`);
  }
  return { ...COMMON, ...ENV_CONFIG[env] };
}

module.exports = { ENVIRONMENTS, configForEnv };

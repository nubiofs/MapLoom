(function() {
  var translations = {
    'new_map': 'Nuevo Mapa',
    'notifications_tab': 'Notificaciones',
    'no_notifications': 'Ninguna notificación',
    'map_layers': 'Capas de Mapa',
    'add_layer_btn': 'Añadir Capa',
    'add_layers': 'Añadir Capas',
    'remove_layer': 'Retirar la Capa',
    'attributes': 'Atributos',
    'local_geoserver': 'Geoserver Locales',
    'filter_layers': 'Capas Filtrantes',
    'add_new_server': 'Añadir Servidor Nuevo',
    'add_server': 'Añadir Servidor',
    'server_type': 'Tipo',
    'server_name': 'Nombre',
    'server_url': 'URL',
    'close_btn': 'Cerrar',
    'add_btn': 'Añadir',
    'merge_results': 'Combinar los Resultados',
    'cancel_btn': 'Cancelar',
    'done_btn': 'Terminado',
    'remove_btn': 'Eliminar',
    'conflict': 'CONFLICTO',
    'synchronization': 'Sincronización',
    'add_sync': 'Añadir Sinc',
    'merge': 'Fusionar',
    'config': 'Configuración',
    'repo': 'Repo',
    'remote': 'Remoto',
    'new_remote': 'Nuevo Remoto',
    'add_remote': 'Añadir Remoto',
    'repo_name': 'Nombre',
    'remote_name': 'Nombre Remoto',
    'edit_btn': 'Editar',
    'repo_url': 'URL',
    'repo_username': 'Nombre de Usuario',
    'repo_password': 'Contraseña',
    'toggle_menu': 'Menú Palanca',
    'single': 'Unico',
    'continuous': 'Continuo',
    'into': 'a',
    'error': 'Error',
    'warning': 'Advertencia',
    'failed_get_capabilities': 'No se encontraron capacidades: ',
    'server_url_not_specified': 'No se especifica url del servidor',
    'fixed': 'ARREGLADO',
    'adds': 'Adiciones',
    'modifications': 'Modificaciones',
    'deletes': 'Eliminados',
    'merges': 'Fusiones',
    'cancel_merge': 'Cancelar la fusion',
    'complete_merge': 'Completar la fusion',
    'save_btn': 'Guardar',
    'single_conflict': '1 conflicto pendiente',
    'multiple_conflicts': '{{value}} conflictos pendientes',
    'sure_cancel_merge': 'Esta seguro que desea cancelar el proceso de fusion?',
    'sure_commit_merge': 'Esta seguro que desea finalizar y confirmar la fusion?',
    'commit_merge': 'Confirmar Fusion',
    'added_1_feature': 'Añadió 1 elemento a \'{{layer}}\' a través MapLoom.',
    'modified_1_feature': 'Modificado 1 elemento de \'{{layer}}\' a través MapLoom.',
    'removed_1_feature': 'Eliminado 1 elemento de \'{{layer}}\' a través MapLoom.',
    'applied_via_maploom': 'Aplica a través de MapLoom.',
    'conflicts_in': 'Los conflictos resueltos en \'{{layer}}\'',
    'merged_branch': 'Fusionada \'{{branch}}\' rama',
    'yes_btn': 'Si',
    'no_btn': 'No',
    'differences': 'Diferencias',
    'from': 'De',
    'to': 'A',
    'new_feature': 'Nuevo Elemento',
    'changed_feature': 'Elemento Modificada',
    'original_feature': 'Elemento Original',
    'removed_feature': 'Elemento Eliminada',
    'merged_feature': 'Elemento Fusionada',
    'location_lon_lat': 'Ubicacion ( lon, lat )',
    'show_history': 'Mostrar Historial',
    'show_table': 'Mostrar Tabla',
    'show_pics': 'Mostrar Imagenes',
    'edit_geometry': 'Editar Geometria',
    'edit_attributes': 'Editar Atributos',
    'delete_feature': 'Remover Elemento',
    'feature_diff_error': 'No se pudo retirar todas las diferencias para los elementos. ' +
        'Revisar la coneccion de red e intente nuevamente.',
    'no_local_branches': 'El deposito no tenia ramas locales.',
    'unable_to_get_branches': 'No se pudo identificar ramas del deposito. Intentar re añadir la capa.',
    'unable_to_get_remotes': 'No se pudo identificar los remotos del deposito. Intentar re añadir la capa.',
    'unable_to_get_datastore': 'No se pudo lograr el deposito de datos.',
    'unable_to_add_remote': 'No se pudo añadir el remoto de GeoGit: ',
    'unable_to_get_feature_type': 'No se pudo retirar el tipo de elemento del almacenaje de datos.',
    'unable_to_get_datastore_name': 'No se pudo determinar el nombre del almacenador de datos.',
    'layer_was_layer_group': 'No se pudo determinar si la capa era una capa grupal.',
    'start_date': 'Fecha de Inicio:',
    'end_date': 'Fecha de Conclusion:',
    'summarize_btn': 'Resumir',
    'anonymous': 'Anonimo',
    'history_failed': 'No se pudo buscar el historial de la capa. Favor intentar de nuevo.',
    'history': 'Historial',
    'btn_ok': 'Aceptar',
    'summary_of_changes': 'Resumen de Cambios',
    'too_many_changes': 'Se encontraron demasiados cambios para ser mostrados. De ser posible, minimice el rango.',
    'too_many_changes_refresh': 'Se realizaron demasiados cambios para ser mostrados. ' +
        'Solamente los primeros cambios {{value}} seran mostrados.',
    'no_changes_in_time_range': 'No se realizaron cambios a la capa dentro del marco de tiempo especificado.',
    'no_changes_in_commit': 'No se realizaron cambios a la capa.',
    'diff_unknown_error': 'Un error desconocido ocurrio al resumir las diferencias. Favor intentar nuevamente.',
    'in_lower_case': 'en',
    'to_lower_case': 'a',
    'from_lower_case': 'de',
    'history_for': 'Historial para {{value}}',
    'drag_zoom_not_supported': 'No existen las operaciones de "drag zoom" en este mapa.',
    'repository': 'Deposito',
    'transaction': 'Transaccion',
    'abort': 'Abortar',
    'resolve_conflicts': 'Resolver Conflictos',
    'merge_conflicts': 'Fusionar Conflictos',
    'conflicts_encountered': 'Se identificaron algunos problemas al realizar la operacion, ' +
        'desea resolverlos o desea abortar la fusion?',
    'conflict_unknown_error': 'Un error desconocido ocurrio al finalizar la transaccion. Favor intentar nuevamente.',
    'unable_to_resolve_conflicts': 'No se pudo resolver conflictos {{value}}. Favor intentar nuevamente.',
    'merge_unknown_error': 'Un error desconocido ocurrio al realizar la fusion. Favor intentar nuevamente.',
    'merge_successful': 'Fusion Exitosa',
    'merge_no_changes': 'La fusion resulto en ningun cambio.',
    'select_date_range': 'Seleccionar el Rango de Datos',
    'link': 'Enlace',
    'link_already_exists': 'El enlace ya existe.',
    'synchronize': 'Sincronizar',
    'no_email': 'No Tiene Email',
    'added': 'Agregado',
    'removed': 'Removido',
    'modified': 'Modificado',
    'feature': 'elemento',
    'features': 'elementos',
    'conflicted_features_resolved': 'Elementos en conflicto resueltos: ',
    'id': 'ID',
    'author_name': 'Nombre del Autor',
    'author_email': 'Email del Autor',
    'committer_name': 'Nombre del Destinatario',
    'committer_email': 'Email del Destinatario',
    'commit_time': 'Tiempo de Destino',
    'message': 'Mensaje',
    'export_csv': 'Exportar CSV',
    'sure_delete_feature': 'Esta seguro de querer eliminar este elemento?',
    'drawing_geometry': 'Dibujando la Geometria',
    'adding_feature': 'Añadiendo el Elemento',
    'must_create_feature': 'Debe crear un elemento antes de continuar.',
    'editing_geometry': 'Editando Geometria',
    'save_attributes': 'Guardar Atributos',
    'invalid_fields': 'Existen campos invalidos {{value}}. Debe solucionar estos problemas previo a poder guardar.',
    'add_feature': 'Añadir Elemento',
    'toggle_visibility': 'Modificar la Visibilidad',
    'remote_options': 'Opciones Remotas',
    'history_summary': 'Resumen de Historial',
    'zoom_world': 'Regresar a Mapa Mundial',
    'toggle_legend': 'Modificar la Descripcion',
    'refresh_layers': 'Refrescar Capas',
    'sure_remove_layer': 'Esta seguro de querer eliminar esta capa?',
    'pull_unknown_error': 'Un error desconocido ocurrio al realizar el retiro del remoto. Favor intentar nuevamente.',
    'pull_multiple_error': 'Tire ha fallado varias veces, tal vez el control remoto no está disponible en este' +
        ' momento . Por favor, inténtelo de nuevo más tarde.',
    'pull_timeout_error': 'Tire está tomando más tiempo de lo normal, esto podría deberse a que el servidor se' +
        ' sobrecargue por lo que en un esfuerzo por dejar que la captura del servidor hasta que se detiene la' +
        ' sincronización automática. Por favor, espere antes de reanudar la sincronización automática para que el' +
        ' servidor pueda ponerse al día.',
    'local': 'Local',
    'pull_conflicts': 'Extraer Conflictos',
    'feature_id': 'Elemento ID',
    'table_view': 'Vista de Tabla',
    'filter_table': 'Filtrar',
    'clear_table_filter': 'Limpiar',
    'word_wrap': 'Ajuste de línea de alternancia',
    'title': 'es_Title',
    'abstract': 'es_Abstract',
    'save_this_map': 'es_Save this map.',
    'save_failed': 'es_Save failed',
    'map_save_failed': 'es_Map save failed with the following status: {{value}}.',
    'fetch': 'es_Fetch',
    'fetch_error': 'Hubo un error al tratar de buscar desde el control remoto, por favor intente de nuevo más tarde.',
    'fetch_timeout': 'Fetch está tomando más tiempo de lo que debería, es posible que todavía está trabajando así ' +
        'que espere un momento antes de volver a intentarlo.',
    'repo_not_compatible': 'El repositorio specifed no es un mando a distancia compatible con tu repositorio.',
    'not_a_repo': 'El punto final especificado no es un repositorio.',
    'could_not_connect': 'Error al conectar con el punto final especificado.',
    'remote_add_success': '{{value}} se ha agregado correctamente',
    'remote_edit_success': '{{value}} se ha cambiado correctamente.',
    'remote_remove': 'Está seguro que desea eliminar este mando a distancia?',
    'no_compatible_repos': 'No hubo repositorios compatibles se encuentran en la url dada.',
    'continue_btn': 'Continuar',
    'remote_already_exists': 'El remoto especificado ya existe en este repo.',
    'remote_add_error': 'Hubo un error al tratar de agregar el control remoto.',
    'remote_edit_error': 'Hubo un error al tratar de editar su control remoto.',
    'multiple_compatible_repos': 'Hubo múltiples repositorios compatibles encontrados. Por favor, elija la que' +
        ' desee utilizar.',
    'undo_changes': 'Deshacer Cambios',
    'newer_feature_version': 'Este elemento se ha modificado desde la presente notificación fue publicada. ' +
        '¿Quieres comparar con la versión más reciente?',
    'undo_successful': 'Deshacer Exitosa',
    'undo_no_changes': 'El deshacer resultó en ningún cambio.',
    'fixed_feature': 'Elemento Fijo',
    'undo_conflicts': 'Deshacer Conflictos',
    'changes_undone': 'Los cambios en el elemento se ha deshecho con éxito.',
    'reverted_changes_to_feature': 'Revertidos los cambios realizados en {{feature}}.',
    'remote_not_fetched': 'Parecería como si el mando a distancia que ha seleccionado no ha sido traidos del.' +
        ' Ahora vamos a tratar de ir a buscar los datos que necesita para crear vínculos.',
    'latlon_confirm': '{{value}} es el valor interpretado de sus coordenadas. ¿Esto es correcto?',
    'degree_minute_second': 'Grados Minutos Segundos',
    'decimal_degrees': 'Grados Decimales',
    'other': 'Otro'
  };

  var module = angular.module('loom_translations_es', ['pascalprecht.translate']);

  module.config(function($translateProvider) {
    $translateProvider.translations('es', translations);
  });

}());

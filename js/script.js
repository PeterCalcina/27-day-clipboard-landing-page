window.addEventListener('scroll', function () {
  let windowHeight = window.innerHeight;

  // Llama a las funciones de animación con los parámetros necesarios
  animationTrack('.track__content_img', 'animation_left', 1);
  animationTrackSummaries(['track_summary_1', 'track_summary_2', 'track_summary_3'], ['animation_right', 'animation_left', 'animation_right'], [1, 1, 1]);
  animationAccess('.access__clipboard__title', 'animation_top', 1);
  animationAccess('.access__clipboard__description', 'animation_opacity', 2);
  animationAccess('.workflow__title', 'animation_top', 1);
  animationAccess('.workflow__description', 'animation_opacity', 2);
  animationWorkflowSummaries(['workflow_summary_1', 'workflow_summary_2', 'workflow_summary_3'], ['animation_scale', 'animation_scale', 'animation_scale'], [1, 1, 1], [0.2, 0.4, 0.6]);
  animationAccess('.images', 'animation_opacity', 2);
  animationAccess('.clipboard__title', 'animation_left', 1.5);
  animationAccess('.clipboard__description', 'animation_right', 1.5);
  animationButtons('btn_1', 'btn_2', 'animation_right', 'animation_left', 1);
});

// Función genérica para animar elementos
function animationAccess(selector, animationName, duration) {
  let element = document.querySelector(selector);
  let position = element.getBoundingClientRect().top;

  if (position < window.innerHeight) {
    element.style.animation = `${animationName} ${duration}s forwards`;
  } else {
    element.style.animation = 'none';
  }
}

// Función específica para animar elementos de tipo "track"
function animationTrack(selector, animationName, duration) {
  animationAccess(selector, animationName, duration);
}

// Función específica para animar resúmenes de tipo "track"
function animationTrackSummaries(ids, animationNames, durations) {
  ids.forEach((id, index) => {
    let element = document.getElementById(id);
    let position = element.getBoundingClientRect().top;

    if (position < window.innerHeight) {
      element.style.animation = `${animationNames[index]} ${durations[index]}s forwards`;
    } else {
      element.style.animation = 'none';
    }
  });
}

// Función específica para animar resúmenes de tipo "workflow"
function animationWorkflowSummaries(ids, animationNames, durations, delays) {
  ids.forEach((id, index) => {
    let element = document.getElementById(id);
    let position = element.getBoundingClientRect().top;

    if (position < window.innerHeight) {
      element.style.animation = `${animationNames[index]} ${durations[index]}s forwards ${delays[index]}s`;
    } else {
      element.style.animation = 'none';
    }
  });
}

// Función específica para animar botones
function animationButtons(selector1, selector2, animationName1, animationName2, duration) {
  let element1 = document.getElementById(selector1);
  let element2 = document.getElementById(selector2);
  let position = element1.getBoundingClientRect().top;

  if (position < window.innerHeight) {
    element1.style.animation = `${animationName1} ${duration}s forwards`;
    element2.style.animation = `${animationName2} ${duration}s forwards`;
  } else {
    element1.style.animation = 'none';
    element2.style.animation = 'none';
  }
}

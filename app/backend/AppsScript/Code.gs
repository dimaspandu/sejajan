function doOptions() {
  return jsonResponse({
    success: true,
    message: "CORS preflight"
  });
}

function doGet(e) {
  return route(e, "GET");
}

function doPost(e) {
  return route(e, "POST");
}

function route(e, method) {
  const path = e.parameter.path || "";

  try {
    if (method === "GET") {
      if (path === "patungans") return getPatungans();
      if (path === "patungan") return getPatunganDetail(e);
    }

    if (method === "POST") {
      if (path === "patungan/create") return createPatungan(e);
      if (path === "patungan/join") return joinPatungan(e);
    }

    return errorResponse("Endpoint tidak ditemukan", 404);

  } catch (err) {
    return errorResponse(err.message, 500);
  }
}

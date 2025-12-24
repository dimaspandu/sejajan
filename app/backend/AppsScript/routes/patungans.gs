function getPatungans() {
  const patungans = getAllRows("patungans")
    .filter(p => p.status === "active");

  return successResponse(
    "Berhasil mengambil daftar patungan",
    patungans
  );
}

function getPatunganDetail(e) {
  const id = e.parameter.id;
  if (!id) throw new Error("Missing patungan id");

  const patungan = getAllRows("patungans")
    .find(p => p.id === id);

  if (!patungan)
    return errorResponse("Patungan tidak ditemukan", 404);

  const contributors = getAllRows("contributions")
    .filter(c => c.patungan_id === id && c.status !== "refunded");

  return successResponse(
    "Berhasil mengambil detail patungan",
    { patungan, contributors }
  );
}

function createPatungan(e) {
  const body = JSON.parse(e.postData.contents);

  requireFields(body, [
    "title",
    "target_amount",
    "deadline_at",
    "user_id"
  ]);

  requirePositiveNumber(body.target_amount, "target_amount");

  const patungan = {
    id: generateId(),
    title: body.title,
    description: body.description || "",
    image_url: body.image_url || "",
    target_amount: body.target_amount,
    collected_amount: 0,
    min_contribution: body.min_contribution || 1000,
    deadline_at: body.deadline_at,
    status: "active",
    created_by: body.user_id,
    contributor_count: 0,
    created_at: nowISO(),
    updated_at: nowISO()
  };

  appendRow("patungans", patungan);

  return successResponse(
    "Patungan berhasil dibuat",
    patungan
  );
}

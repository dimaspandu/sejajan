function joinPatungan(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(3000);

  try {
    const body = JSON.parse(e.postData.contents);

    requireFields(body, [
      "patungan_id",
      "user_id",
      "amount"
    ]);

    requirePositiveNumber(body.amount, "amount");

    const patungans = getAllRows("patungans");
    const patungan = patungans.find(p => p.id === body.patungan_id);

    if (!patungan)
      return errorResponse("Patungan tidak ditemukan");

    if (patungan.status !== "active")
      return errorResponse("Patungan sudah tidak aktif");

    if (isExpired(patungan.deadline_at))
      return errorResponse("Waktu patungan sudah habis");

    const contribution = {
      id: generateId(),
      patungan_id: body.patungan_id,
      user_id: body.user_id,
      amount: body.amount,
      status: "paid",
      joined_at: nowISO(),
      paid_at: nowISO()
    };

    appendRow("contributions", contribution);

    const updatedCollected =
      Number(patungan.collected_amount) + body.amount;

    const updatedCount =
      Number(patungan.contributor_count) + 1;

    const newStatus =
      updatedCollected >= patungan.target_amount
        ? "completed"
        : "active";

    updateRowById("patungans", patungan.id, {
      collected_amount: updatedCollected,
      contributor_count: updatedCount,
      status: newStatus,
      updated_at: nowISO()
    });

    return successResponse(
      "Berhasil bergabung ke patungan",
      contribution
    );

  } finally {
    lock.releaseLock();
  }
}

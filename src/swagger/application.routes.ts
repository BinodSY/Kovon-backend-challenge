/**
 * @swagger
 * /applications:
 *   post:
 *     summary: Apply for a job
 *     tags: [Applications]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - candidateId
 *               - jobId
 *             properties:
 *               candidateId:
 *                 type: string
 *                 format: uuid
 *               jobId:
 *                 type: string
 *                 format: uuid
 *     responses:
 *       201:
 *         description: Application created successfully
 */


/**
 * @swagger
 * /applications:
 *   get:
 *     summary: List applications for a job
 *     tags: [Applications]
 *     parameters:
 *       - in: query
 *         name: jobId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: List of applications sorted by eligibility
 */


/**
 * @swagger
 * /applications/{id}/shortlist:
 *   patch:
 *     summary: Shortlist an eligible candidate
 *     tags: [Applications]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Candidate shortlisted successfully
 *       400:
 *         description: Not eligible for shortlisting
 */

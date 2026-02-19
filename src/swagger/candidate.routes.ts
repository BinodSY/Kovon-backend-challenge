/**
 * @swagger
 * /candidates:
 *   post:
 *     summary: Create a new candidate
 *     tags: [Candidates]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - skill
 *               - experience
 *               - languageScore
 *               - documentsVerified
 *             properties:
 *               name:
 *                 type: string
 *               skill:
 *                 type: string
 *               experience:
 *                 type: integer
 *               languageScore:
 *                 type: number
 *               documentsVerified:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Candidate created successfully
 */

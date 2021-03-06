
export const MarkerQueries = {
    GetAllMarker:`
        SELECT * FROM map WHERE is_deleted=0
    `,
    GetMarkerByType:`
        SELECT * FROM map Where is_underground=0 AND type = ? AND is_deleted=0
    `,
    GetMarkerById:`
        SELECT * FROM map Where id = ?
    `,
    GetOneMarker:`
        SELECT * FROM map WHERE is_underground=0 AND is_deleted=0 LIMIT 100
`,
}
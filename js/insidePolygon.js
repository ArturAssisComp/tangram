function insidePoly(poly, pointx, pointy) {
    var i, j;
    var inside = false;
    for (i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        if(((poly[i].y > pointy) != (poly[j].y > pointy)) && (pointx < (poly[j].x-poly[i].x) * (pointy-poly[i].y) / (poly[j].y-poly[i].y) + poly[i].x) ) inside = !inside;
    }
    return inside;
}
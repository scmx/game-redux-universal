default:
	< structure.dot sed "s/{hash}/$$(git rev-parse --short HEAD)$$(git diff --quiet --exit-code -- structure.dot || echo '-wip')/" | dot -Tpng > structure.png

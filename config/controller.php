<?php
require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../config/argument.php';
require_once __DIR__ . '/../config/treatment.php';
require_once __DIR__ . '/../config/functions.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? '';

    switch ($action) {
        case 'update_argument':
            $id = (int)($_POST['id'] ?? 0);
            $content = $_POST['content'] ?? '';
            if ($id && $content) {
                updateArgument($id, $content);
                header("Location: ../admin/admin.php?success=argument_updated");
                exit;
            }
            break;

        case 'delete_argument':
            $id = (int)($_POST['id'] ?? 0);
            if ($id) {
                deleteArgument($id);
                header("Location: ../admin/admin.php?success=argument_deleted");
                exit;
            }
            break;

        case 'add_argument':
            $content = $_POST['content'] ?? '';
            $sectionId = (int)($_POST['section_id'] ?? 0);
            if ($content && $sectionId) {
                addArgument($content, $sectionId);
                header("Location: ../admin/admin.php?success=argument_added");
                exit;
            }
            break;

        case 'add_treatment':
            $title = $_POST['title'] ?? '';
            $description = $_POST['description'] ?? '';
            $image = $_FILES['image'] ?? null;
            if ($title && $description && $image) {
                addTreatment($title, $description, $image);
                header("Location: ../admin/admin.php?success=treatment_added");
                exit;
            }
            break;

        case 'update_treatment':
            $id = (int)($_POST['id'] ?? 0);
            $title = $_POST['title'] ?? '';
            $description = $_POST['description'] ?? '';
            $image = $_FILES['image'] ?? null;
            if ($id && $title && $description) {
                updateTreatment($id, $title, $description, $image);
                header("Location: ../admin/admin.php?success=treatment_updated");
                exit;
            }
            break;

        case 'delete_treatment':
            $id = (int)($_POST['id'] ?? 0);
            if ($id) {
                deleteTreatment($id);
                header("Location: ../admin/admin.php?success=treatment_deleted");
                exit;
            }
            break;

        case 'update_section':
            $sectionName = $_POST['section_name'] ?? '';
            $content = $_POST['content'] ?? '';
            if ($sectionName && $content) {
                $pdo = getDbConnection();
                $stmt = $pdo->prepare("UPDATE home_page_section SET content = ? WHERE section_name = ?");
                $stmt->execute([$content, $sectionName]);
                header("Location: ../admin/admin.php?success=section_updated");
                exit;
            }
            break;

        default:
            header("Location: ../admin/admin.php?error=invalid_action");
            exit;
    }
}
header("Location: ../admin/admin.php?error=invalid_request");
exit;